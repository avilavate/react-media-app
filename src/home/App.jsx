import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Glyphicon, Form, InputGroup } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Form inline>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search Artists" />
                        <InputGroup.Addon>
                            <Glyphicon glyph="music" />
                        </InputGroup.Addon>
                    </InputGroup>
                </Form>
                <Gallery />
            </div>
        );
    }
}

export default App;