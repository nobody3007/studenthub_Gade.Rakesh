const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
document.getElementById("username").textContent = "Username:- " + username;
document.getElementById("email").textContent = "Email:- " + email;
const defaultTasks = [
  "Register StudentHub Account",
  "Complete HTML",
  "Complete CSS",
  "Learn JavaScript",
];
let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;

displayTasks();

const addTask = document.getElementById("addTask");
const logoutbtn = document.getElementById("logout");

logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("tasks");

  window.location.href = "index.html";
});

addTask.addEventListener("click", () => {
  const task = document.getElementById("taskInput").value;

  if (task === "") {
    alert("Please enter a task");
    return;
  } else {
    tasks.push(task);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  createTaskElements(task);
});

function displayTasks() {
  tasks.forEach((task) => {
    createTaskElements(task);
  });
}

function createTaskElements(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  const span = document.createElement("span");

  span.textContent = task;
  span.classList.add("li-style");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("tasklist").appendChild(li);
  document.getElementById("taskInput").value = "";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });
  deleteBtn.addEventListener("click", () => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] === task) {
        tasks.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.remove();
  });
}
const defaultLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
  },
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
  },
  {
    name: "W3Schools",
    url: "https://www.w3schools.com",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
  },
];
let links = JSON.parse(localStorage.getItem("links")) || defaultLinks;
displayLinks();
const addLink = document.getElementById("addLink");
addLink.addEventListener("click", () => {
  const websiteName = document.getElementById("websiteName").value;
  const url = document.getElementById("websiteURL").value;

  if (url === "" || websiteName === "") {
    alert("Please enter both a website name and URL");
    return;
  } else {
    links.push({ name: websiteName, url: url });
  }

  localStorage.setItem("links", JSON.stringify(links));
  createLinkElements({ name: websiteName, url: url });
});

function displayLinks() {
  links.forEach((link) => {
    createLinkElements(link);
  });
}
function createLinkElements(link) {
  const card = document.createElement("div");
  card.classList.add("bookmark-card");

  const name = document.createElement("span");
  name.textContent = link.name;

  const website = document.createElement("a");
  website.textContent = "Open";
  website.href = link.url;
  website.target = "_blank";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  card.appendChild(name);
  card.appendChild(website);
  card.appendChild(deleteBtn);

  document.getElementById("bookmarkList").appendChild(card);
  deleteBtn.addEventListener("click", () => {
    for (let i = 0; i < links.length; i++) {
      if (links[i].name === link.name && links[i].url === link.url) {
        links.splice(i, 1);

        break;
      }
    }

    localStorage.setItem("links", JSON.stringify(links));

    card.remove();
  });
}
