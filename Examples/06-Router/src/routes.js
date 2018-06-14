import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Routes extends Component {
    render() {
        return <div>
            <Link to='/about'> Main </Link>
            <br/>
            <Link to='/posts'>Post</Link>
            <br />
            <Link to='/post1'>The first post 1</Link>
            <br />
            <Link to='/post2'>The last post</Link>
            <br />
            <Link to='/post/dhjfdjfhjdhj'> With ID </Link>
            <br />
            <Link to='/the/link/never/exists'> never exists</Link>
        </div>;
    }
}
