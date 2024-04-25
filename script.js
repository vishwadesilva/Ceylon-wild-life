document.addEventListener('DOMContentLoaded', function() {
  const signInForm = document.querySelector('.login-form');
  signInForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = signInForm.querySelector('#username').value;
      const password = signInForm.querySelector('#password').value;

      // Get users from local storage
      const localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];


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


      const allUsers = [...localStorageUsers, ...hardcodedUsers];

      const user = allUsers.find(u => u.username === username && u.password === password);
      if (user) {

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


      const users = JSON.parse(localStorage.getItem('users')) || [];


      const existingUser = users.find(u => u.username === newusername || u.email === email);
      if (existingUser) {
          alert('Username or email already exists');
          return;
      }


      const newUser = {
          fullname,
          username: newusername,
          email,
          password: newpassword
      };
      users.push(newUser);


      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration successful!');

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


if (
  enteredname === "vishwaadmin" && 
  enteredPassword === "dieaking"
) {

  window.location.href = "newsletter_subscriptions.html";
} else if (
  storedUserData &&
  storedUserData.name === enteredname &&
  storedUserData.password === enteredPassword
) {

  window.location.href = "index.html";
} else {

  alert("Invalid email or password. Please try again.");
}
signInForm.reset();

/* Newsletter */

function newsletterForm() {
  return {
    Name: '',
    subscribe() {
      // Saves subscriptions to the localStorage
      const subscription = {
        Name: this.email
      };
      const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
      subscriptions.push(subscription);
      localStorage.setItem('subscriptions', JSON.stringify(subscriptions));


      this.Name = '';

      alert('Subscription successful!'); 
    }
  };
}
