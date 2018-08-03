import React, { Component } from "react";
import { addNewToDo} from "../store/actions";

export default class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick() {
        addNewToDo(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (
            <div className="submitFormContainer">
                <label className="elementForm">New item:</label>
                <input className="elementForm" type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="elementForm" onClick={this.handleClick}>
                    Add
                </button>
            </div>
        );
    }
}
