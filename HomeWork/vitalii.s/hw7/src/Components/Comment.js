import React from "react";

class Comment extends React.Component {
    render() {
      return <div className="comment"> {this.props.value} </div>;
    }
  }

export default Comment;
