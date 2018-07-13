import React from 'react';

export default class CommentsList extends React.Component {
    render() {
        const items = this.props.comments.map((item, index) =>{
            return <li className="App-listItem" key={index}>{item}</li>
        });
        return (
            <ul>{items}</ul>
        );
    }
}