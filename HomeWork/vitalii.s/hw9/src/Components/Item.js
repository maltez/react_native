import React from "react";

const Item = props => {
    return (
        <div>
            <input className="checkboxItem" type="checkbox" checked={props.item.done} onChange={props.done.bind(this, props.item.id)} />
            {props.item.value}
        </div>
    );
};
export default Item;
