import React, { Component } from 'react';
import store from './store';

export class Decrement extends Component {
    render(){
        return(
            <button onClick={() => {store.dispatch({type: 'DECREMENT'})}}>Decrement</button>
        );
    }
}