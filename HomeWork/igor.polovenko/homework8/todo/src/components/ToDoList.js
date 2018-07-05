import React, { Component } from 'react';
import ItemList from './ItemList';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = { list: [] };
        this.onItemChecked = this.onItemChecked.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
    }

    render() {
        return (
            <div>
                <h3>ToDo List:</h3>
                <ItemList list={this.state.list} checkedCallback={this.onItemChecked} />
                <input type='text' value={this.state.inputText} onChange={this.onInputChange} onKeyPress={this.onInputKeyPress} />
                <button onClick={this.addNewItem}>Add to list</button>
            </div>
        );
    }

    onItemChecked(index, checked) {
        let list = this.state.list;
        if (index < list.length) {
            list[index].checked = checked;
            list = list.sort(Item.comparator());
            this.setState({ list: list });
        }
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