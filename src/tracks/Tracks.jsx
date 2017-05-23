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

    playPause(audioUrl) {
        let audio = new Audio(audioUrl)
        let playing = this.state.playing ? false : true;
        this.setState({
            playing: playing,
            playingUrl: audioUrl,
            audio: audio
        });
        this.state.playing ? this.state.audio.play() : this.state.audio.pause();
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
                    {this.state.playingUrl === t.audioUrl && this.state.playing === true ? <Glyphicon glyph="pause" className="AudioIcon" /> : <Glyphicon glyph="play" className="AudioIcon" />}
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
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="Tracks" style={{ display: 'flex', 'flexWrap': 'wrap' }}>
                            {trackRows}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Tracks;