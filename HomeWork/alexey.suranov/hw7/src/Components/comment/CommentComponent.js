import React, { Component } from 'react';
import './comment.css';
export default class Comment extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { comments } = this.props;
        return (
            <div>
                <ul>
                    {
                        comments.length ? comments.map((item, i) => {
                            return <li key={i} className="comment">{item}</li>
                        }) : null
                    }

                </ul>
            </div>
        );
    }
}
