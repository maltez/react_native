import React, { Component } from 'react';
import Comment from '../comment/CommentComponent';
import Form from '../form/FormComponent';
import './main.css';
export default class MainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
        }
        this.addComment = this.addComment.bind(this);
    }

    addComment(item) {
        let
            current = new Date(),
            time = (current.getHours() < 10 ? '0' + current.getHours() : current.getHours()) + ':' + current.getMinutes() + ':' + current.getSeconds(),
            comment = time + " " + item;

        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    render() {

        return (
            <div className="App comments">
                <Comment comments={this.state.comments} />
                <Form addComment={this.addComment} />
            </div>
        );
    }
}