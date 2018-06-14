import React, { Component } from 'react';

export class WithParam extends Component {
    render() {
        return <div>
            <h1>Required post ID: {this.props.match.params.id} </h1>
        </div>
        
    }
}