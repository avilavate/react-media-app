import React, { Component } from 'react';
import '../profile/Gallery.css';

import { Grid, Col, Row } from 'react-bootstrap';


class Tracks extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="App">Track List</div>
        )
    }

}

export default Tracks;