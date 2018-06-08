import $ from "jquery";
import "jquery-validation";

$(document).ready(function() {
    $("#myform").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 7
            }
        },
        submitHandler: function(form) {
            alert("valid");
            return false;
        }
    });
});
