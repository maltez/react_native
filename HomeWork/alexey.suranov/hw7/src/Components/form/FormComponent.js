import React, { Component } from 'react';
import './form.css';
export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            comments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        const { addComment } = this.props;
        addComment(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className="container">
                        <div className="title"> Add comment:</div>
                        <input name="comment" className="input" type="text" onChange={this.handleChange} value={this.state.inputValue} />
                        <button type="submit" className="button" onClick={this.handleSubmit}>Add comment</button>
                    </div>
                </div>
            </div>
        );
    }
}
