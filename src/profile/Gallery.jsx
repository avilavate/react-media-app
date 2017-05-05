import React, { Component } from 'react';
import '../profile/Gallery.css';


import { Grid, Col, Row } from 'react-bootstrap';

class Gallery extends Component {
    componentWillMount() {
        this.state = {
            artist: this.props.artist,
            artistImageUrl: this.props.artist.artists.items["0"].images[0].url ? this.props.artist.artists.items["0"].images[0].url : '',
            followers: 0,
            name: this.props.artist.artists.items["0"].name,
            genres: this.props.artist.artists.items["0"].genres
        }
    }
    render() {
        console.dir(this.state.artist);
        return (
            <Grid>
                <Row className="show-grid Profile-Info">
                    <Col sm={12} md={2}><img
                        className="Profile-Image"
                        alt="Profile"
                        src={this.state.artistImageUrl}
                    /></Col>
                    <Col sm={12} md={10} className="Profile-Name Name"> <div >{this.state.name}</div>
                        <div className="Genre">
                            {
                                this.state.genres.map((g, k) => {
                                    return <span key={k}>{g}</span>
                                })
                            }
                        </div></Col>
                </Row>
            </Grid>
        );
    }
}

export default Gallery;
