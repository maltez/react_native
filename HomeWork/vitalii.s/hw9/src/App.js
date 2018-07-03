import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Filters from "./Components/Filters";
import Items from "./Components/Items";
import ToDoSubmitForm from "./Components/ToDoSubmitForm";
import NotFound from "./Components/NotFound";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.addNewToDo = this.addNewToDo.bind(this);
        this.done = this.done.bind(this);
    }

    addNewToDo(value) {
        let items = this.state.items;
        items.push({
            id: items.length,
            done: false,
            value
        });
        this.setState({ items });
    }

    done(id) {
        let items = this.state.items;
        items.map((item, i) => {
            if (item.id === id) {
                item.done = item.done ? false : true;
            }
        });
        this.setState({ items });
    }

    render() {
        return (
            <div className="mainContainer">
                <h2>HW9 - ToDo List using 'Routing' as filter</h2>
                <div>
                    <Filters />
                    <Switch>
                        <Route
                            path="/All"
                            render={() => <Items filter="All" items={this.state.items} done={this.done} />}
                        />
                        <Route
                            path="/Done"
                            render={() => <Items filter="Done" items={this.state.items} done={this.done} />}
                        />
                        <Route
                            path="/New"
                            render={() => <Items filter="New" items={this.state.items} done={this.done} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                    <ToDoSubmitForm addNewToDo={this.addNewToDo} />
                </div>
            </div>
        );
    }
}

export default App;
