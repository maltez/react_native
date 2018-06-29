import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Routes extends Component {
    render() {
        return <div>
            {'Filter:  '}
            <Link to='/all'>All</Link>
            {'  |  '}
            <Link to='/complete'>Complete</Link>
            {'  |  '}
            <Link to='/pending'>Pending</Link>
            <br />
        </div>
    }
}