import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.list.map((item, index) => 
                    <Item index={index} label={item.text} checked={item.checked} checkedCallback={this.props.checkedCallback}/>)}
            </ul>
        );
    }
}