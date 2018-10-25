import React, { Component } from 'react';
import './App.css';
import './materialize.min.js';


class Row extends Component {
    render() {
        <tr>
            <td><b>{this.props.name}</b></td>
            <td>{this.props.value}</td>
        </tr>
    }
}

export default Row;