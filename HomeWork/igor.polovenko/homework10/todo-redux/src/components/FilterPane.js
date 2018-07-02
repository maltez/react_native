import React, { Component } from 'react';
import Link from './Link';
import { Filters, setFilter } from '../actions';
import store from '../store';

export default class FilterPane extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
            <div>
                <Link text={Filters.all} onClick={() => store.dispatch(setFilter(Filters.all))} activeFilter={this.state.filter} />
                <Link text={Filters.complete} onClick={() => store.dispatch(setFilter(Filters.complete))} activeFilter={this.state.filter} />
                <Link text={Filters.pending} onClick={() => store.dispatch(setFilter(Filters.pending))} activeFilter={this.state.filter} />
            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}