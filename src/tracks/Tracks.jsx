import React, { Component } from 'react';
import '../profile/Gallery.css';

import { Button, Glyphicon } from 'react-bootstrap';
import './Tracks.css'


class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: 'play',
            pause: 'pause',
            glyphIcon: [],
            hide: [],
            length: 0
        }
    }
    playPause(k) {
        debugger;
        let newGlyphIcon = this.state.glyphIcon.slice();
        let newHide = [];
        newGlyphIcon[k] === this.state.play ?
            newGlyphIcon[k] = this.state.pause : newGlyphIcon[k] = this.state.play;

        if (newGlyphIcon[k] === this.state.pause) {
            for (let i = 0; i < this.state.glyphIcon.length; i++) {
                if (i !== k) {
                    newGlyphIcon[i] = this.state.play;
                    newHide[i] = true;
                }
                else {
                    newHide[i] = false;
                }
            }
        }
        this.setState({
            glyphIcon: newGlyphIcon,
            hide: newHide
        });
    }

    initializeHide(length) {
        if (this.state.hide.length < 1) {
            let hide = [], glyphIcon = [];
            for (let i = 0; i < length; i++) {
                hide.push(true);
                glyphIcon.push(this.state.play);
            }
            this.setState({ hide: hide });
            this.setState({ glyphIcon: glyphIcon });
        }
    }
    shouldHide(k) {
        let newHide = this.state.hide.slice();
        newHide[k] = true;
        if (this.state.glyphIcon[k] === this.state.pause) newHide[k] = false;
        this.setState({ hide: newHide });
        console.log("hide array", this.state.hide)
    }
    shouldShow(k, length) {
        let newHide = this.state.hide.slice();
        newHide[k] = false;
        this.setState({ hide: newHide });
        console.dir("hide array", this.state.hide)
    }
    getTrackUi(ts) {
        let trackRows = ts.map((t, k) => {
            return <div style={{ flex: 1, float:'center' }} key={k} className="PlayPause">
                <div style={{
                    backgroundImage: `url(${t.trackImageUrl})`,
                    backgroundSize: '120px 120px'
                }}
                    alt={k + "_Track"}
                    className="Track-Image"
                    onMouseEnter={this.shouldShow.bind(this, k, ts.length)}
                    onMouseLeave={this.shouldHide.bind(this, k, ts.length)}
                >
                    <span className={this.state.hide[k] ? 'Hidden' : 'AudioIcon'}>
                        <Glyphicon glyph={this.state.glyphIcon[k]} onClick={this.playPause.bind(this, k)} />
                    </span>
                </div>
                <p style={{ float: 'center' }}>
                    <span>{t.name}</span>
                </p>
            </div >
        });

        return trackRows;
    }
    componentWillUpdate(newProps, newState) {
        if (newProps.Tracks) {
            let length = newProps.Tracks.tracks.length;
            this.initializeHide(length);
        }
    }
    render() {
        if (!this.props.Tracks) return null
        let tracks = [];

        this.props.Tracks.tracks.forEach(t => {
            tracks.push({
                trackImageUrl: t.album.images[0].url,
                name: t.album.name,
                audioUrl: t.album.external_urls.href
            })
        });
        // this.initializeHide(tracks.length);
        let trackRows = this.getTrackUi(tracks);
        console.dir(trackRows)
        return (
            <div className="Tracks" style={{ display: 'flex', 'flexWrap': 'wrap' }}>
                {trackRows}
            </div>
        )
    }

}

export default Tracks;