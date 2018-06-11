import React, { Component } from "react";

class Day extends Component {
    render() {
      const { value } = this.props;
        return <div> { value } </div>;
    }
}

export default Day;
