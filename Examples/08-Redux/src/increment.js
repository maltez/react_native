import React, { Component } from 'react';
import store from './store';

export class Increment extends Component {
    render(){
        return (
            <button onClick={() => {store.dispatch({type: 'INCREMENT'})}}>Increment</button>
        );
    }
}