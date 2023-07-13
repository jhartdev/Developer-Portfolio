document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    var form = e.target;
    var endpoint = form.getAttribute('data-formspree');
    
    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    
    var formData = new FormData(form);
    
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          alert('Thank you for your message!');
        } else {
          alert('Oops! Something went wrong.');
        }
        submitButton.disabled = false;
      })
      .catch(function (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong.');
        submitButton.disabled = false;
      });
  });
  