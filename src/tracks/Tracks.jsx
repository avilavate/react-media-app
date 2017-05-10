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
            hide: []
        }
    }
    playPause(k) {
        let newGlyphIcon = this.state.glyphIcon;
        newGlyphIcon[k] === this.state.play ?
            newGlyphIcon[k] = this.state.pause :
            newGlyphIcon[k] = this.state.play;
        this.setState({ glyphIcon: newGlyphIcon });
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
        let newHide = this.state.hide;
        newHide[k] = true;
        if (this.state.glyphIcon[k] === this.state.pause) newHide[k] = false;
        this.setState({ hide: newHide });
        console.dir("hide array", this.state.hide)
    }
    shouldShow(k, length) {
        let newHide = this.state.hide;
        newHide[k] = false;
        this.setState({ hide: newHide });
        console.dir("hide array", this.state.hide)
    }
    getTrackUi(ts) {
        let trackRows = ts.map((t, k) => {
            return <div style={{ flex: 1 }} key={k} className="PlayPause">
                <div style={{ 'backgroundImage': `url(${t.trackImageUrl})` }}
                    alt={k + "_Track"}
                    className="Track-Image"
                    onMouseEnter={this.shouldShow.bind(this, k, ts.length)}
                    onMouseLeave={this.shouldHide.bind(this, k, ts.length)}
                >
                    <span className={this.state.hide[k] ? 'Hidden' : 'AudioIcon'}>
                        <Glyphicon glyph={this.state.glyphIcon[k] || this.state.play} onClick={this.playPause.bind(this, k)} />
                    </span>
                </div>
                <p style={{ float: 'center' }}>
                    <span>{t.name}</span>
                </p>
            </div>
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

        console.log("render", this.props);
        if (!this.props.Tracks) return null
        let tracks = [];

        this.props.Tracks.tracks.map(t => {
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