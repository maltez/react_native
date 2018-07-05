import React, { Component } from 'react'; 
import ItemsListComponent from './ItemsListComponent';
import Button from './ButtonComponent';
import '../TodoList.css';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

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
            this.state.itemsList.forEach((item) => {item.isNew = false});
            this.setState({value: "", itemsList: [{title: this.state.value, isSelected: false, isNew: true }, ...this.state.itemsList]});
        }
    }

    onListChanged = (changedList) => {
        this.setState({value: "", itemsList: changedList});
        for(let i = 0; i < this.state.itemsList.length; i++) {
            console.log("item[" + i + "].isSelected = " + this.state.itemsList[i].isSelected);
        }
    }

    render() {
        return (
            <div>
                <h3>Todo list:</h3>
                <Router>
                    <div>
                        <Route path="/all" render={() => <ItemsListComponent list={this.state.itemsList} filterType = {"all"} listChangedCallback={this.onListChanged} /> } />
                        <Route path="/selected" render={() => <ItemsListComponent list={this.state.itemsList} filterType = {"selected"} listChangedCallback={this.onListChanged} /> } />
                        <Route path="/unselected" render={() => <ItemsListComponent list={this.state.itemsList} filterType = {"unselected"} listChangedCallback={this.onListChanged} /> } />
                        
                        <label className="Input-title-style">
                            Title:
                            <input className="Input-text" type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <Button buttonStyle="Add-button" onClick={this.AddNewItemToList} title="Add"/>

                        <ul>
                            <li>
                            <Link to="/all">All</Link>
                            </li>
                            <li>
                            <Link to="/selected">Selected</Link>
                            </li>
                            <li>
                            <Link to="/unselected">Unselected</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
        );
    }
}


