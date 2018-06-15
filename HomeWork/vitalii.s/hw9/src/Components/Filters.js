import React from "react";
import { Link } from "react-router-dom";

const Filters = () => {
    return (
        <div className="filters">
            <Link to="/All"> All </Link>
            <Link to="/Done"> Done </Link>
            <Link to="/New"> New </Link>
        </div>
    );
};
export default Filters;
