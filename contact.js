document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can add additional logic here to handle the form submission, such as sending an email or storing the data.

    alert('Thank you for your message!!');
    document.getElementById('message').value = '';
    // You can also redirect the user to a thank you page or perform other actions as needed.
});