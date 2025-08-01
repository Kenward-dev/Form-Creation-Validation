document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('registration-form');
   form.addEventListener('submit', function(event) {
       event.preventDefault();
       
       const username = document.getElementById('username').value.trim();
       const email = document.getElementById('email').value.trim();
       const password = document.getElementById('password').value.trim();
       
       const feedbackDiv = document.getElementById('form-feedback');
       let isValid = true;
       let messages = [];
       
       if (username.length < 3) {
           isValid = false;
           messages.push('Username must be at least 3 characters long.');
       }
       
       if (!email.includes('@')) {
           isValid = false;
           messages.push('Please enter a valid email address.');
       }
       
       if (password.length < 8) {
           isValid = false;
           messages.push('Password must be at least 8 characters long.');
       }
       
       if (isValid) {
           feedbackDiv.style.display = 'block';
           feedbackDiv.textContent = 'Registration successful!';
           feedbackDiv.style.color = '#28a745';
       } else {
           feedbackDiv.style.display = 'block';
           feedbackDiv.innerHTML = messages.join('<br>');
           feedbackDiv.style.color = '#dc3545';
       }
   });
});