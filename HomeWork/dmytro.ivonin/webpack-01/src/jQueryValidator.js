console.log('jQuery validator.');

$(document).ready(function() {
    $("#test").html("Input email and phone:");
    
    $( "#emailForm" ).validate({
        rules: {
          field: {
            required: true,
            email: true
          }
        }
      });

      $( "#phoneForm" ).validate({
        rules: {
          field: {
            required: true,
            number: true
          }
        }
      });
});