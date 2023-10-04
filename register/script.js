// Get the form element
var registrationForm = document.getElementById("registration-form");

// Add form submission event listener
registrationForm.addEventListener("submit", function(event) {
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var role = document.getElementById("role").value;

    // Basic form validation
    if (username === "" || email === "" || phone === "" || role==="") {
        alert("All fields are required");
        event.preventDefault(); // Prevent form submission
    } else {
        // Form is valid, you can submit the form to the server here
        alert("Registration successful!");
    }
});