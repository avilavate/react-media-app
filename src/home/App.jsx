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
            artist: artist,
            flag:0
        };
    }

    setQuery(e) {
        // console.dir(e.target.value);
        this.setState({ query: e.target.value });
    }
    search() {
        let requestUrl = getUrl({ Query: this.state.query });
        
        let _self = this;
        _self.setState({ response: undefined });
        fetch(requestUrl)
            .then((res => { return res; }), err => alert("Error: In getting artist details!"))
            .then((res) => {
                let resJson = res.json();
                return resJson;
            }, err => console.log("error1", err))
            .then(b => {
                _self.setState({ response: b });
                _self.setState({flag:Math.random()});
                return _self.state;
            }, err => console.log("error2", err))
            .then(state=>{
                _self.forceUpdate()
                console.log(state)
            })

    }

    render() {
        return (
            <div className="App">
                <InputGroup>
                    <FormControl type="text" placeholder="Search Artists" onChange={this.setQuery.bind(this)} onKeyPress={
                        (k) => {
                            if (k.charCode === 13)
                                this.search.cal(this);
                        }
                    } />
                    <InputGroup.Addon>
                        <Glyphicon glyph="music" onClick={this.search.bind(this)} />
                    </InputGroup.Addon>
                </InputGroup>
                <Gallery artist={this.state.response} flag={this.state.flag}/>
            </div>
        );
    }
}

export default App;