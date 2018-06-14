import React, { Component } from "react";

export class Profile extends Component {
    onClick = () => {
      this.setState(state => {
        throw new Error('Oh nooo!');
        return { ...state };
      });
    };
    
    render() {
      return (
        <div onClick={this.onClick}>
          Name: {this.props.user.name}
        </div>
      );
    }
    }