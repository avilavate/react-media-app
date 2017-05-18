import React, { Component } from 'react';
import '../profile/Gallery.css';

import { Glyphicon } from 'react-bootstrap';
import './Tracks.css'
import Utils from '../config/util.js';

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 10,
            playing: false,
            playingUrl: '',
            audio: null
        }
    }


    initializeHide(length) {
        if (this.state.hide.length < 1) {
            let hide = [], glyphIcon = [];
            for (let i = 0; i < length; i++) {
                hide.push(true);
            }
            this.setState({ hide: hide });
        }
    }

    playPause(audioUrl) {
        let audio = new Audio(audioUrl);
        this.setState({
            playing: !this.state.playing,
            playingUrl: audioUrl,
            audio: audio
        });
        this.state.playing ? audio.play() : audio.pause();
    }

    getTrackUi(ts) {
        let trackRows = ts.map((t, k) => {
            return <div style={{ flex: 1, float: 'center' }} key={k} className="PlayPause">
                <div style={{
                    backgroundImage: `url(${t.trackImageUrl})`,
                    backgroundSize: '120px 120px'
                }}
                    alt={k + "_Track"}
                    className="Track-Image"
                    title={t.name}
                    onClick={this.playPause.bind(this, t.audioUrl)}
                >
                    {this.state.playingUrl === t.audioUrl ? <Glyphicon glyph="pause" className="AudioIcon" /> : <Glyphicon glyph="play" className="AudioIcon" />}
                </div>
                <p style={{ float: 'center' }}>
                    <span>{Utils.trimAndFix(t.name, 14)}</span>
                </p>
            </div >
        });

        return trackRows;
    }

    render() {
        if (!this.props.Tracks) return null
        let tracks = [];
        this.props.Tracks.tracks.forEach(t => {
            tracks.push({
                trackImageUrl: t.album.images[0].url,
                name: t.name,
                audioUrl: t.preview_url
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