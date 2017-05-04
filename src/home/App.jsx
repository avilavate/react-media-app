import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery';
import getUrl from '../config/util.js';
import Configuration from '../config/config.js';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Glyphicon, Form, InputGroup } from 'react-bootstrap';

class App extends Component {
    state = {
        query: ''
    };

    setQuery(e) {
        // console.dir(e.target.value);
        this.setState({ query: e.target.value });
    }
    search() {
        console.log(getUrl());
        console.log(this.state.query);
    }

    render() {
        return (
            <div className="App">
                <InputGroup>
                    <FormControl type="text" placeholder="Search Artists" onChange={this.setQuery.bind(this)} onKeyPress={
                        (k) => {
                            if (k.charCode == 13)
                                this.search();
                        }
                    } />
                    <InputGroup.Addon>
                        <Glyphicon glyph="music" onClick={this.search.bind(this)} />
                    </InputGroup.Addon>
                </InputGroup>
                <Gallery />
            </div>
        );
    }
}

export default App;