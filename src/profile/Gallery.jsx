import React, { Component } from 'react';
import '../profile/Gallery.css';


import { Grid, Col, Row } from 'react-bootstrap';

class Gallery extends Component {
    componentWillMount() {
        this.state = {
            albums: undefined
        };
    }

    updateAlbums() {
        console.dir(this.props.artist);
        if (!this.props.artist) return;

        this.state.albums = this.props.artist.albums || [];
        albums.items.forEach(function (album) {
            this.state.albums.push({
                artistImageUrl: album.images[0].url ? album.images[0].url : '',
                // followers: album.followers.total ? album.followers.total : 0,
                name: album.name ? album.name : '',
                genres: album.genres ? album.genres : []
            })
        }, this);
        
    }

    render() {
        this.updateAlbums();
        let albumCols = [];
        console.log("Gallery");
        console.dir(this.props);
        this.state.albums.forEach((album, k) => {
            albumCols.push(<Row key={k} className="show-grid Profile-Info">
                <Col sm={12} md={2}><img
                    className="Profile-Image"
                    alt="Profile"
                    src={album.artistImageUrl}
                /></Col>
                <Col sm={12} md={10} className="Profile-Name Name"> <div >{album.name}</div>
                    <div className="Genre">
                        {
                            album.genres.map((g, k) => {
                                return <span key={k}>Genre: {g}</span>
                            })
                        }
                    </div></Col>
                <Col sm={12} md={10} className="Followers"> <div >Followers: {album.followers}</div>
                </Col>
            </Row>);
        })

        return (
            <Grid>
                {albumCols}
            </Grid>
        );
    }
}

export default Gallery;
