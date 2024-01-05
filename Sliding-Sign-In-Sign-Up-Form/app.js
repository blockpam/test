const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function handleLogin(username, password) {
  // Implement your login logic here
  // ...

  // For demonstration purposes, you can redirect to a new page
  window.location.href = 'login-success.html';
}

function handleSignup(username, email, password) {
  // Call your Google Apps Script function to add the record
  google.script.run.withSuccessHandler(function(result) {
    // Handle success, for example, redirect to the login page
    window.location.href = 'login.html';
  }).withFailureHandler(function(error) {
    // Handle failure
    console.error('Error during signup:', error);
  }).addRecord(username, email, password);
}
