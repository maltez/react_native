import React from 'react';

export default function link(props) {
    return (
        <button onClick={props.onClick} disabled={props.activeFilter === props.text}>{props.text}</button>
    )
}