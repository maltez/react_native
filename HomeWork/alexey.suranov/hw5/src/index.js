import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./validation";
import "./style.css";

const app = (
    <div>
        <h2 className = "message">Please, fill all the fields</h2>
        <form id="form">
            Phone:<input type="text" name="phone" />
            Email:<input type="text" name="email" />
            <input type="submit" value="Check" />
        </form>
    </div>
);

ReactDOM.render(app, document.getElementById("app"));
