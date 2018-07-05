import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./validation";
import "./style.css";

const app = (
    <div>
        <h1 className = "message">Please, fill out the form below!</h1>
        <form id="myform">
            Phone:<input type="text" name="phone" />
            Email:<input type="text" name="email" />
            <input type="submit" value="Check" />
        </form>
    </div>
);

ReactDOM.render(app, document.getElementById("app"));
