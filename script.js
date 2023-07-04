

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Replace the following condition with your own authentication logic
    if (username === "admin" && password === "admin123") {
      window.location.href = "admin-dashboard.html"; // Redirect to the admin dashboard
    } else {
      document.getElementById("error-msg").textContent = "Invalid username or password";
    }
  });
  
  

  var hamburger = document.querySelector(".hamburger");


  var menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function() {
  menu.classList.toggle("show");
});
