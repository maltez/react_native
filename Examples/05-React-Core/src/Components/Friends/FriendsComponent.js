import React, { Component } from 'react';
import ListItem from '../FuctionalComponent/ListItemComponent';

export default class Friends extends Component {
    render() {
        return (
            <ul>
                {this.props.friends.map((item, index)=><ListItem key={index} value={item} />)}
            </ul>
        );
    }
}