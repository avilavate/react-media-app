import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Glyphicon } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FormGroup>
                    <FormControl type="text" placeholder="Search Artists" />
                    <Button> <Glyphicon glyph="search" /></Button>
                </FormGroup>

                <Gallery />
            </div>
        );
    }
}

export default App;