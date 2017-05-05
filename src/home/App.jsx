import React, { Component } from 'react';

import '../styles/App.css';
import Gallery from '../profile/Gallery.jsx';
import getUrl from '../config/util.js';

//ToDo: Remove Sample data once tested
import artist from '../sample-data.js';

import { FormControl, Glyphicon, InputGroup } from 'react-bootstrap';

class App extends Component {

    componentWillMount() {
        this.state = {
            query: '',
            artist: artist
        };
    }
    setQuery(e) {
        // console.dir(e.target.value);
        this.setState({ query: e.target.value });
    }
    search() {
        fetch(getUrl({}))
            .then((res => res.json), err => console.log("Error: In getting artist details!"))
            .then(json => { console.log(json) }, err => { console.log("Error: In getting Json!") });
        console.log(this.state.query);
    }

    render() {
        return (
            <div className="App">
                <InputGroup>
                    <FormControl type="text" placeholder="Search Artists" onChange={this.setQuery.bind(this)} onKeyPress={
                        (k) => {
                            if (k.charCode === 13)
                                this.search();
                        }
                    } />
                    <InputGroup.Addon>
                        <Glyphicon glyph="music" onClick={this.search.bind(this)} />
                    </InputGroup.Addon>
                </InputGroup>
                <Gallery artist={this.state.artist} />
            </div>
        );
    }
}

export default App;