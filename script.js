document.addEventListener('DOMContentLoaded', function() {
  const signInForm = document.querySelector('.login-form');
  signInForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = signInForm.querySelector('#username').value;
      const password = signInForm.querySelector('#password').value;

      // Get users from local storage
      const localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Hardcoded user data
      const hardcodedUsers = [
          {
              "username": "admin",
              "password": "admin",
              "role": "admin",
              "email": "admin@admin.com"
          },
          {
              "username": "user",
              "password": "user",
              "role": "site user",
              "email": "user@user.com"
          }
      ];

      // Combine hardcoded users and local storage users
      const allUsers = [...localStorageUsers, ...hardcodedUsers];

      const user = allUsers.find(u => u.username === username && u.password === password);
      if (user) {
          // Store user details in localStorage
          localStorage.setItem('currentUser', JSON.stringify(user));
          alert('Login successful!');
          window.location.href = 'index.html';
      } else {
          alert('Invalid username or password');
      }
  });

  const signUpForm = document.querySelector('.register-form');
  signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const fullname = signUpForm.querySelector('#fullname').value;
      const newusername = signUpForm.querySelector('#newusername').value;
      const email = signUpForm.querySelector('#email').value;
      const newpassword = signUpForm.querySelector('#newpassword').value;

      // Get existing users or initialize empty array
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if the username or email already exists
      const existingUser = users.find(u => u.username === newusername || u.email === email);
      if (existingUser) {
          alert('Username or email already exists');
          return;
      }

      // Add the new user to the array
      const newUser = {
          fullname,
          username: newusername,
          email,
          password: newpassword
      };
      users.push(newUser);

      // Store updated user data in localStorage
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration successful!');
      // Clear the form fields
      signUpForm.reset();
  });
});

/* Newsletter Dashboard */

document.addEventListener("DOMContentLoaded", function() {
  const subscriptionsList = document.getElementById('subscriptions-list');
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  
  subscriptions.forEach(function(subscription) {
      const listItem = document.createElement('li');
      listItem.textContent = subscription.email;
      subscriptionsList.appendChild(listItem);
  });
});

// Checking if the entered email and password match the specific credentials
if (
  enteredname === "vishwaadmin" && 
  enteredPassword === "dieaking"
) {
  // Redirect to the newsletter subscriptions page upon successful login
  window.location.href = "newsletter_subscriptions.html";
} else if (
  storedUserData &&
  storedUserData.name === enteredname &&
  storedUserData.password === enteredPassword
) {
  // Redirect to the index page if the stored credentials match the entered credentials
  window.location.href = "index.html";
} else {
  // Alert for invalid email or password
  alert("Invalid email or password. Please try again.");
}
signInForm.reset();

/* Newsletter */

function newsletterForm() {
  return {
    email: '',
    subscribe() {
      // Saves subscriptions to the localStorage
      const subscription = {
        email: this.email
      };
      const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
      subscriptions.push(subscription);
      localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

      // To clear the form fields after submission
      this.email = '';

      alert('Subscription successful!'); // You can replace this with any UI feedback you want
    }
  };
}