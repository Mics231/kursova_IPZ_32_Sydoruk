$(document).ready(function() {
    $('#subscribe-form').on('submit', function(event) {
        let email_field = $('input[name=email]');

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let isValid = true;
        
        if (email_field.val() === '') {
            event.preventDefault();

            email_field.addClass('error');
            
            isValid = false;
        } else {
            if (!emailPattern.test(email_field.val())) {
                event.preventDefault();
    
                email_field.addClass('error');

                $(email_field).val('');

                isValid = false;
            } else {
                email_field.removeClass('error');
            }
        }

        if (isValid) {
            alert("Success!");
        }
    });
});