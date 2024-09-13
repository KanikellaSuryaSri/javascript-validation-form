document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Reset error messages
  document.getElementById('errorMessages').innerHTML = '';
  
  // Fetch form values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const age = document.getElementById('Age').value.trim(); // Added age
  
  // Validation
  const errors = [];
  
  if (fullName.length < 5) {
    errors.push('Name must be at least 5 characters long.');
  }
  
  if (!email.includes('@')) {
    errors.push('Enter a valid email address.');
  }
  
  if (phoneNumber.length !== 10 || isNaN(phoneNumber)  || phoneNumber === '1234567890') { // Updated phone number validation to check if it's a number
    errors.push('Enter a valid 10-digit phone number.');
  }
  
  if (isNaN(age) || parseInt(age) < 18) { // Added age validation
    errors.push('Age must be a valid number and should be 18 or above.');
  }
  
  if (password.length < 8 || password === 'password' || password === fullName) {
    errors.push('Password must be at least 8 characters long and should not be "password" or your name.');
  }
  
  if (password !== confirmPassword) {
    errors.push('Passwords do not match.');
  }
  
  // Display errors or submit the form
  if (errors.length > 0) {
    const errorList = document.createElement('ul');
    errors.forEach(function(error) {
      const listItem = document.createElement('li');
      listItem.textContent = error;
      errorList.appendChild(listItem);
    });
    document.getElementById('errorMessages').appendChild(errorList);
  } else {
    // Form is valid, submit it
    document.getElementById('myForm').submit();
  }
});