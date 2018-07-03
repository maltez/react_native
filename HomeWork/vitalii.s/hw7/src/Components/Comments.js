import React, { Component } from "react";
import Comment from "./Comment";
import CommentsForm from "./CommentsForm";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {}

    addComment(comment) {
        let list = this.state.list,
            now = new Date(),
        time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

        list.push(time + " - " + comment);
        this.setState({ list });
    }

    render() {
        return (
            <div className="comments">
                <ul className="listComments">
                    {this.state.list.map((comment, index) => (
                        <li key={index}>
                            <Comment value={comment} />
                        </li>
                    ))}
                </ul>
                <CommentsForm addComment={this.addComment.bind(this)} />
            </div>
        );
    }
}

export default Comments;
