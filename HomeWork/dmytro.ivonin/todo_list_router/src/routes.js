import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Routes extends Component {
    render() {
        return <div>
            <Link to='/all'> All Tasks </Link>
            <br/>
            <Link to='/done'>Done Tasks</Link>
            <br />
            <Link to='/notDone'>Not Done Tasks</Link>
            <br />
            <br />
            <br />
            <br />
        </div>;
    }
}
