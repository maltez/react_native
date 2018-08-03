import React from "react";
import { changeFilter } from "../store/actions";

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
