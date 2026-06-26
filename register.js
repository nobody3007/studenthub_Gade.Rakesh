const form = document.getElementById("regform")
const storedusername = localStorage.getItem("username");
if (storedusername != null) {
    window.location.href = "dashboard.html"
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Please enter a username");
        return;
    }

    if (email === "") {
        alert("Please enter an email");
        return;
    }

    if (password === "") {
        alert("Please enter a password");
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    window.location.href = "Dashboard.html";
});

