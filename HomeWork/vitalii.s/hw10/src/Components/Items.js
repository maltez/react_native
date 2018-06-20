import React, { Component } from "react";
import Item from "./Item";
import store from "../store/store";

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { items: store.getState().items, filter: store.getState().filter };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ items: store.getState().items, filter: store.getState().filter });
        });
    }

    render() {
        return (
            <div className="ItemsContainer">
                Filter is: {this.state.filter}
                <br />
                <ul className="todoList">
                    {this.state.items.length > 0 ? (
                        this.state.filter === "All" ? (
                            this.state.items.map((item, index) => <li key={index}>{<Item item={item} />}</li>)
                        ) : this.state.filter === "Done" ? (
                            this.state.items
                                .filter(item => item.done)
                                .map((item, index) => <li key={index}>{<Item item={item} />}</li>)
                        ) : (
                            <Item item={this.state.items[this.state.items.length - 1]} />
                        )
                    ) : null}
                </ul>
            </div>
        );
    }
}
