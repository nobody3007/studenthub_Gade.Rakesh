const btn = document.getElementById("darkmode");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
});
const quotes = [
    "Success is not final, failure is not fatal.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "The best way to predict the future is to create it.",
    "Do something today that your future self will thank you for."
];
const quote = document.getElementById("quote");
const btun = document.getElementById("btn");

btun.addEventListener("click", () => {
    const randomindex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomindex];
});
const searchbtn = document.getElementById("searchBtn");
const profile = document.getElementById("profile");

searchbtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const response = await fetch
        (
            `https://api.github.com/users/${username}`
        );

    const user = await response.json();
    console.log(user);
    profile.innerHTML = `
        <img src="${user.avatar_url}" width="100">
        <h2>${user.login}</h2>
        <p>${user.id}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repos: ${user.public_repos}</p>
    `;
});
