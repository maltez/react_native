import React from "react";
import { done, remove } from "../store/actions";

const Item = props => {
    return (
        <div className="valueContainer">
            <input
                className="checkboxItem"
                type="checkbox"
                checked={props.item.done}
                onChange={done.bind(this, props.item.id)}
            />
            {props.item.value}
            <div className="delete">
                <a title="Delete" onClick={remove.bind(this, props.item.id)}>
                    x
                </a>
            </div>
        </div>
    );
};
export default Item;
