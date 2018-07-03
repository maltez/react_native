import React, { Component } from 'react';
import ItemList from './ItemList';
import { Filters, addTodo, toggleTodo, setInputText } from '../actions';
import store from '../store';

export class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
        this.filteredList = [];

        this.onItemChecked = this.onItemChecked.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
            <div>
                <h3>ToDo List:</h3>
                <ItemList list={(this.filteredList = this.filterList(this.state.list))} checkedCallback={this.onItemChecked} />
                <input type='text' value={this.state.inputText} onChange={this.onInputChange} onKeyPress={this.onInputKeyPress} />
                <button onClick={this.addNewItem}>Add to list</button>
            </div>
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    filterList(list) {
        return list.filter((value) => {
            return this.state.filter === Filters.all
                || (this.state.filter === Filters.complete && value.checked)
                || (this.state.filter === Filters.pending && !value.checked)
        })
    }

    onItemChecked(index) {
        store.dispatch(toggleTodo(this.filteredList[index]));
    }

    onInputChange(event) {
        store.dispatch(setInputText(event.target.value));
    }

    addNewItem() {
        store.dispatch(addTodo(this.state.inputText));
    }

    onInputKeyPress(event) {
        if (event.key === 'Enter' && this.state.inputText) {
            this.addNewItem();
        }
    }
}

export class Item {
    constructor(text) {
        this.checked = false;
        this.text = text;
    }

    static comparator() {
        return (one, two) => {
            let checked = +one.checked - +two.checked;
            return checked ? checked : one.text >= two.text ? 1 : -1;
        };
    }
}