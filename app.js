
// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the Formspree endpoint from the form's data attribute
    var form = e.target;
    var endpoint = form.getAttribute('data-formspree');
  
    // Disable the submit button while the form is being submitted
    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
  
    // Send the form data to Formspree
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Display success message or handle errors
        if (xhr.status === 200) {
          form.reset(); // Clear the form fields
          alert('Thank you for your message!'); // Display a success message
        } else {
          alert('Oops! Something went wrong.'); // Display an error message
        }
  
        submitButton.disabled = false; // Enable the submit button
      }
    };
  
    // Serialize the form data
    var formData = new FormData(form);
    var encodedData = new URLSearchParams(formData).toString();
  
    // Send the request
    xhr.send(encodedData);
  });
  
