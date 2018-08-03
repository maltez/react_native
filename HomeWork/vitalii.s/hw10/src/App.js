import React from "react";
import Filters from "./Components/Filters";
import Items from "./Components/Items";
import SubmitForm from "./Components/SubmitForm";

import "./app.css";

const App = () => {
    return (
        <div className="mainContainer">
            <h2>HW10 - ToDo List using 'Redux'</h2>
            <div>
                <Filters />
                <Items />
                <SubmitForm />
            </div>
        </div>
    );
};

export default App;
