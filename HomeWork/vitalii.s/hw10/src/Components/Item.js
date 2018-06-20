import React from "react";
import store from "../store/store";

const done = id => {
    store.dispatch({
        type: "DONE_TODO",
        id
    });
};

const remove = id => {
    store.dispatch({
        type: "REMOVE_TODO",
        id
    });
};

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
