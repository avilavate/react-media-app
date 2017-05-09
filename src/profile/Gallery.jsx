import React, { Component } from 'react';
import '../profile/Gallery.css';

import { Grid, Col, Row } from 'react-bootstrap';

class Gallery extends Component {
    render() {
        let artist = {
            artistImageUrl: '',
            followers: 0,
            genres: [],
            id: -1

        };
        if (this.props.artist === undefined) return null;
        else {
            artist = {
                artistImageUrl: this.props.artist.artists.items[0].images[0].url,
                followers: this.props.artist.artists.items[0].followers.total,
                genres: this.props.artist.artists.items[0].genres.join(', '),
                id: this.props.artist.artists.items[0].id,
                name: this.props.artist.artists.items[0].name
            }
        }
        return (
            < div >
                <Grid className="Profile-Info" style={{ float: 'center' }}>
                    <Row key="image"
                        style={{ float: 'left' }} >
                        <div>
                            <img
                                alt="Profile"
                                src={artist.artistImageUrl}
                                className="Profile-Image"
                            />
                        </div>
                    </Row>
                    <Col xs={12} sm={6} md={4} lg={4} className="Profile-Info-Container">
                        <div>
                            <p>
                                <span className="Name">{artist.name}</span>
                            </p>
                            <p className="Profile-Genre">
                                <span className="Profile-Genre"> {artist.genres}</span>
                            </p>
                            <p>
                                <span className="Profile-Genre">{artist.followers} Followers</span>
                            </p>
                        </div>
                    </Col>
                    {/*<Col style={{ maxWidth: '225px' }}
                        xs={12} sm={6} md={2} lg={2}>
                        {artist.followers} Followers
                    </Col>*/}
                </Grid>

            </div >
        );
    }
}

export default Gallery;
