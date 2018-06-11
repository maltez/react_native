import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { About } from './about';
import { Post } from './posts';

export class RR extends Component {
    render() {
        return  <div>
                    <Link to='/about'> Main </Link>
                    <br />
                    <Link to='/post'> Post </Link>
                    <br />
                    <Link to='/post1'> Post1 </Link>
                    <br />
                    <Link to='/post2'> Post2 </Link>
                </div>;
    }
}
