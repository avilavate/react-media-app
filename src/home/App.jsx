import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery.jsx';
import Utils from '../config/util.js';

import { FormControl, Glyphicon, InputGroup } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artists: undefined,
            offline: undefined
        };

    }

    setQuery(e) {
        // console.dir(e.target.value);
        this.setState({ query: e.target.value });
    }
    search() {
        let requestUrl = Utils.getUrl({ Query: this.state.query });

        fetch(requestUrl, { method: 'GET' })
            .then(result => {
                return result = result.json();
            }, err => {
                console.log(err);
            })
            .then(
            artists => {
                this.setState({ artists: artists })
            },
            artistsErr => {
                console.error("Artists", artistsErr);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-6 col-xs-12 col-md-offset-3" > <div className="App">
                        <InputGroup>

                            <FormControl type="text" placeholder="Search Artists..." onChange={this.setQuery.bind(this)} onKeyPress={
                                (k) => {
                                    if (k.charCode === 13)
                                        this.search.call(this);
                                }
                            } />

                            <InputGroup.Addon>
                                <Glyphicon glyph="music" onClick={this.search.bind(this)} />
                            </InputGroup.Addon>
                        </InputGroup>
                    </div></div>
                 
                </div>

                <div>
                    < Gallery artist={this.state.artists} />
                </div>
            </div>
        );
    }
}

export default App;