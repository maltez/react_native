import React from "react";
import store from "../store/store";

const changeFilter = filter => {
    store.dispatch({
        type: "FILTER_TODO",
        filter
    });
};

const Filters = () => {
    return (
        <div className="filters">
            <a onClick={ changeFilter.bind(this, "All") }>All</a>
            <a onClick={ changeFilter.bind(this, "Done") }>Done</a>
            <a onClick={ changeFilter.bind(this, "New") }>New</a>
        </div>
    );
};
export default Filters;
