import React, { Component } from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
    }

    render() {
        return (
            <li key={this.props.index}>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.onChecked} />
                {' '}
                <label>
                    {this.props.checked
                        ? <s>{this.props.label}</s>
                        : this.props.label}
                </label>
            </li>
        );
    }

    onChecked(event) {
        this.props.checkedCallback(this.props.index);
    }
}