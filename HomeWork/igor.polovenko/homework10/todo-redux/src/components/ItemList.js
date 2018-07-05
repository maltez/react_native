import React from 'react';
import Item from './Item';

export default function itemList(props) {
    return (
        <ul>
            {props.list.map((item, index) =>
                <Item index={index} label={item.text} checked={item.checked} checkedCallback={props.checkedCallback} />)}
        </ul>
    );
}
