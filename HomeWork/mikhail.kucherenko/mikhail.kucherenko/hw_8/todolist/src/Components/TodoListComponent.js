import React, { Component } from 'react'; 
import ItemsListComponent from './ItemsListComponent';
import Button from './ButtonComponent';
import '../TodoList.css';

export default class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.enteredTitle = "Todo item";
        this.state = {value: '', itemsList: [{ title: this.enteredTitle, isSelected: false, isNew: true }]};
        this.handleChange = this.handleChange.bind(this);
        this.AddNewItemToList = this.AddNewItemToList.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    AddNewItemToList() {
        if (this.state.value !== "") {
            this.state.itemsList.map((item) => {item.isNew = false})
            this.setState({value: "", itemsList: [{title: this.state.value, isNew: true }, ...this.state.itemsList]});
        }
    }

    render() {
        return (
            <div>
                <h3>Todo list:</h3>
                <ItemsListComponent list={this.state.itemsList}/>
                <label className="Input-title-style">
                    Title:
                    <input className="Input-text" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <Button buttonStyle="Add-button" onClick={this.AddNewItemToList} title="Add"/>
            </div>
        );
    }
}