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
  

  // Get all navigation links and the additional buttons in the landing section
  const links = document.querySelectorAll('.navbar-nav a, .scroll-to');

  // Attach click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent the default anchor link behavior

      // Get the target section's id from the link's href attribute
      const targetId = link.getAttribute('href');

      // Scroll smoothly to the target section
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });