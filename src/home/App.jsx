import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery.jsx';
import getUrl from '../config/util.js';

//ToDo: Remove Sample data once tested

import { FormControl, Glyphicon, InputGroup } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artists: undefined,
            offline: undefined,
            offlineArtist: {
                "artists": {
                    "href": "https://api.spotify.com/v1/search?query=Elvis&type=artist&offset=0&limit=1",
                    "items": [{
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1c22GXH30ijlOfXhfLz9Df"
                        },
                        "followers": {
                            "href": null,
                            "total": 127583
                        },
                        "genres": ["latin", "latin hip hop", "latin pop", "merengue", "reggaeton", "tropical"],
                        "href": "https://api.spotify.com/v1/artists/1c22GXH30ijlOfXhfLz9Df",
                        "id": "1c22GXH30ijlOfXhfLz9Df",
                        "images": [{
                            "height": 640,
                            "url": "https://i.scdn.co/image/b36c3ef9e99dbe104347e48054fb88bde73a191c",
                            "width": 640
                        }, {
                            "height": 320,
                            "url": "https://i.scdn.co/image/1c29b436aee46915bacc7ec5fda29fff2e7795d3",
                            "width": 320
                        }, {
                            "height": 160,
                            "url": "https://i.scdn.co/image/0d1500e23b1fa9e2c12b43e0711ce4a2ad1768b3",
                            "width": 160
                        }],
                        "name": "Elvis Crespo",
                        "popularity": 67,
                        "type": "artist",
                        "uri": "spotify:artist:1c22GXH30ijlOfXhfLz9Df"
                    }],
                    "limit": 1,
                    "next": "https://api.spotify.com/v1/search?query=Elvis&type=artist&offset=1&limit=1",
                    "offset": 0,
                    "previous": null,
                    "total": 359
                }
            }
        };

    }

    setQuery(e) {
        // console.dir(e.target.value);
        this.setState({ query: e.target.value });
    }
    search() {
        debugger;
        let requestUrl = getUrl({ Query: this.state.query });
        let offlineArtist = this.state.offlineArtist;

        fetch(requestUrl, { method: 'GET' })
            .then(result => {
                return result = result.json();
            }, err => {
                return offlineArtist;
            })
            .then(
            artists => {
                this.setState({ artists: artists })
            },
            artistsErr => {
                this.setState({ artists: artistsErr })
            }
            );
    }

    render() {
        return (
            <div>
                <div className="App">
                    <InputGroup>
                        <FormControl type="text" placeholder="Search Artists" onChange={this.setQuery.bind(this)} onKeyPress={
                            (k) => {
                                if (k.charCode === 13)
                                    //   this.search();
                                    ;
                            }
                        } />
                        <InputGroup.Addon>
                            <Glyphicon glyph="music" onClick={this.search.bind(this)} />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>
                < Gallery artist={this.state.artists} />
            </div>
        );
    }
}

export default App;