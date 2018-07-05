import $ from "jquery";
import "jquery-validation";

$(document).ready(function() {
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            }
        },
        submitHandler: function(form) {
            alert("validation success");
            return false;
        }
    });
});
