import React, { Component } from 'react';
import { Increment } from './increment';
import { Decrement } from './decrement';
import { Show } from './show';
import store from './store';


export class App extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    componentDidMount(){
        store.subscribe(
            () => {
                this.setState({count: store.getState()});
            }
        );
    }
    render() {
        return (
            <div>
                <h1>Redux</h1>
                <Increment />
                <Show count={this.state.count}/>
                <Decrement />
            </div>);
    }
}




