import React, { Component } from 'react';
import '../profile/Gallery.css';

import { Grid, Col, Row } from 'react-bootstrap';
import './Tracks.css'


class Tracks extends Component {

    getTrackUi(ts) {
        console.log(ts);
        let trackRows = ts.map((t, k) => {
            return <div style={{ flex: 1 }} key={k}>
                <img
                    alt={k + "_Track"}
                    src={t.trackImageUrl}
                    className="Track-Image"
                />
                <p>
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
            <div  className="Tracks" style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
                {trackRows}
            </div>
        )
    }

}

export default Tracks;