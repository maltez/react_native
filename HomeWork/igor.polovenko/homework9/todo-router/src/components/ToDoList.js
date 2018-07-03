import React, { Component } from 'react';
import ItemList from './ItemList';

export default class ToDoList extends Component {
    static filterValue() {
        return {
            all: 'ALL',
            complete: 'COMPLETE',
            pending: 'PENDING'
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            inputText: '',
        }
        this.filteredList = [];
        this.onItemChecked = this.onItemChecked.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    filterList(list) {
        return list.filter((value) => {
            return this.props.filter === ToDoList.filterValue().all
                || (this.props.filter === ToDoList.filterValue().complete && value.checked)
                || (this.props.filter === ToDoList.filterValue().pending && !value.checked)
        })
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

    onItemChecked(index, checked) {
        this.filteredList[index].checked = checked;

        this.setState({
            list: this.state.list.sort(Item.comparator())
        });
    }

    onInputChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    addNewItem() {
        let list = this.state.list;
        list.push(new Item(this.state.inputText));
        list = list.sort(Item.comparator());
        this.setState({ list: list, inputText: '' });
    }

    onInputKeyPress(event) {
        if (event.key === 'Enter' && this.state.inputText) {
            this.addNewItem();
        }
    }
}

class Item {
    constructor(text) {
        this.checked = false;
        this.text = text;
    }

    static comparator() {
        return (one, two) => {
            return +one.checked - +two.checked;
        };
    }
}