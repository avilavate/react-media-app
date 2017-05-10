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
            glyphIcon: 'play',
            hide: []
        }
    }

    playPause() {
        this.state.glyphIcon === this.state.play ?
            this.setState({ glyphIcon: this.state.pause }) :
            this.setState({ glyphIcon: this.state.play });
    }

    initializeHide(length) {
        if (this.state.hide.length < 1) {
            let hide = [];
            for (let i = 0; i < length; i++) {
                hide.push(true);
            }
            this.setState({ hide: hide });
        }
    }
    shouldHide(k) {
        let newHide = this.state.hide;
        newHide[k] = true;
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
        //  alert(ts);
        this.initializeHide(ts.length);
        let trackRows = ts.map((t, k) => {
            return <div style={{ flex: 1 }} key={k} className="PlayPause">
                <div style={{ background: 'url(t.trackImageUrl)' }}
                    alt={k + "_Track"}
                    className="Track-Image"
                    onMouseEnter={this.shouldShow.bind(this, k, ts.length)}
                    onMouseLeave={this.state.glyphIcon === this.state.play && this.shouldHide.bind(this, k, ts.length)}
                >
                    <span className={this.state.hide[k] ? 'Hidden' : 'AudioIcon'}>
                        <Glyphicon glyph={this.state.glyphIcon} onClick={this.playPause.bind(this)} />
                    </span>
                </div>
                <p style={{ float: 'center' }}>
                    <span>{t.name}</span>
                </p>
            </div>
        });

        return trackRows;
    }

    render() {
        if (!this.props.Tracks) return null
        let tracks = [];

        this.props.Tracks.tracks.map(t => {
            tracks.push({
                trackImageUrl: t.album.images[0].url,
                name: t.album.name,
                audioUrl: t.album.external_urls.href
            })
        });

        let trackRows = this.getTrackUi(tracks);
        console.dir(trackRows)
        return (
            <div className="Tracks" style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
                {trackRows}
            </div>
        )
    }

}

export default Tracks;