import React, { Component } from "react";

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        const { addComment } = this.props;
        addComment(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (
            <div className="commentsForm">
                <label className="elementFormComment">Your comment:</label>
                <input
                    className="elementFormComment"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default CommentsForm;
