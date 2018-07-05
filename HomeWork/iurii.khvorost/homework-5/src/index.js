//# Homework 5
//- Create site used jQuery.Site one form with jQuery validation(email, phone number).
//- Site should be bundled by webpack. You have to set version (increment) of bundle. Include all scripts not by the hands. 
// All scripts should by minifiing and uglify. Sours maps should be included.
//- Join css, babel, react and jsx loaders in one project. Add React hello world application in this project. 
// Configurable webpack-dev-server for this project. Include bundle.js file in this project automatically. With plugin(with hash).

const $ = require("jquery");
import "jquery-validation";
import "jquery-validation/dist/additional-methods.js";

$(document).ready(function() {
    $("#myform").validate({
        rules: {
            phone: {
                required: true,
                phoneUS: true
            },
            email: {
                email:true,
                required: true
            }
        }
    })
});

// React
import React from 'react';
import ReactDom from 'react-dom';
import styles from './main.css'

//const header = React.createElement('h1', {}, 'Hello REACT!!!');
const header = <h1>Hello React!</h1>;
ReactDom.render(header, document.getElementById('app'));
