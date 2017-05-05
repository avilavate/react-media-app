import React, { Component } from 'react';
import '../profile/Gallery.css';


import { Grid, Col, Row } from 'react-bootstrap';

class Gallery extends Component {
    componentWillMount() {
        //Initialization:
        this.state = {
            albums: []
        };
        console.dir(this.props.artist.artists.items);
        this.props.artist.artists.items.forEach(function (album) {
            this.state.albums.push({
                artistImageUrl: album.images[0].url ? album.images[0].url : '',
                followers: album.followers.total ? album.followers.total : 0,
                name: album.name ? album.name : '',
                genres: album.genres ? album.genres : []
            })
        }, this);
        // this.state = {
        //     artist: this.props.artist,
        //     artistImageUrl: this.props.artist.artists.items["2"].images[0].url ? this.props.artist.artists.items["2"].images[0].url : '',
        //     followers: this.props.artist.artists.items["2"].followers.total ? this.props.artist.artists.items["2"].followers.total : 0,
        //     name: this.props.artist.artists.items["2"].name,
        //     genres: this.props.artist.artists.items["2"].genres,
        //     albums: []
        // }
    }
    render() {
        let albumCols = [];

        this.state.albums.forEach(album => {
            albumCols.push(<Row className="show-grid Profile-Info">
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
