import React from "react";
import Item from "./Item";

const Items = props => {
    return (
        <div className="ItemsContainer">
            Filter is: {props.filter}
            <br />
            <ul className="todoList">
                {props.items.length > 0 ? (
                    props.filter === "All" ? (
                        props.items.map((item, index) => <li key={index}>{<Item item={item} done={props.done} />}</li>)
                    ) : props.filter === "Done" ? (
                        props.items
                            .filter(item => item.done)
                            .map((item, index) => <li key={index}>{<Item item={item} done={props.done} />}</li>)
                    ) : (
                        <Item item={props.items[props.items.length - 1]} done={props.done} />
                    )
                ) : null}
            </ul>
        </div>
    );
};
export default Items;
