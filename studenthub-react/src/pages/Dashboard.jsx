import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/head.jsx";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    function logout() {

        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("tasks");

        navigate("/Register");
    }
    const defaultTasks = [
        "Register StudentHub Account",
        "Complete HTML",
        "Complete CSS",
        "Learn JavaScript",
    ];

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || defaultTasks
    );

    const [taskInput, setTaskInput] = useState("");
    function addTask() {

        if (taskInput === "") {
            alert("Please enter a task");
            return;
        }

        const newTasks = [...tasks, taskInput];

        setTasks(newTasks);

        localStorage.setItem("tasks", JSON.stringify(newTasks));

        setTaskInput("");
    }
    function deleteTask(index) {

        const newTasks = tasks.filter((task, i) => i !== index);

        setTasks(newTasks);

        localStorage.setItem("tasks", JSON.stringify(newTasks));
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
    const [links, setLinks] = useState(
        JSON.parse(localStorage.getItem("links")) || defaultLinks
    );
    const [websiteName, setWebsiteName] = useState("");
    const [websiteURL, setWebsiteURL] = useState("");
    function deleteWebsite(index) {

        const newLinks = links.filter((link, i) => i !== index);

        setLinks(newLinks);

        localStorage.setItem("links", JSON.stringify(newLinks));
    }
    function addWebsite() {

        if (websiteName === "" || websiteURL === "") {
            alert("Please enter both a website name and URL");
            return;
        }

        const newLinks = [
            ...links,
            {
                name: websiteName,
                url: websiteURL,
            }
        ];

        setLinks(newLinks);

        localStorage.setItem("links", JSON.stringify(newLinks));

        setWebsiteName("");
        setWebsiteURL("");
    }
    return (
        <div>
            <Header />

            <main>

                <div className="main-text">
                    <h1 style={{ textAlign: "center" }}>
                        Student Details
                    </h1>

                    <div className="profile-container">
                        <div className="profile-card">

                            <h2 style={{ textAlign: "start" }}>

                                <p id="username">
                                    Username: {username}
                                </p>

                                <p id="email">
                                    Email: {email}
                                </p>

                                <button
                                    style={{
                                        marginLeft: "328px",
                                        borderRadius: "10px",
                                        backgroundColor: "red",
                                        color: "yellow"
                                    }}
                                    onClick={logout}
                                    id="logout"
                                >
                                    Logout
                                </button>

                            </h2>

                        </div>
                    </div>

                </div>

                <div className="dashboard-cards">

                    <div className="task-manager">

                        <h1 className="main-text">
                            Task Manager
                        </h1>

                        <input
                            style={{ marginLeft: "60px" }}
                            type="text"
                            id="taskInput"
                            placeholder="Enter a task"
                            onChange={(e) => setTaskInput(e.target.value)}
                        />

                        <button
                            onClick={addTask}
                            style={{ borderRadius: "5px" }}
                            id="addTask"
                        >
                            Add Task
                        </button>

                        <ul id="tasklist">
                            {tasks.map((task, index) => (
                                <li key={index}>

                                    <input type="checkbox"
                                        onChange={(e) =>
                                            e.target.nextSibling.style.textDecoration =
                                            e.target.checked ? "line-through" : "none"} />

                                    <span>{task}</span>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTask(index)}
                                    >
                                        Delete
                                    </button>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bookmark">

                        <h2 className="main-text">
                            Quick Links
                        </h2>

                        <div className="quick-links">

                            <input
                                type="text"
                                id="websiteName"
                                value={websiteName}
                                onChange={(e) => setWebsiteName(e.target.value)}
                                placeholder="Website Name"
                            />

                            <input
                                type="url"
                                id="websiteURL"
                                value={websiteURL}
                                onChange={(e) => setWebsiteURL(e.target.value)}
                                placeholder="https://example.com"
                            />

                            <button id="addLink" onClick={addWebsite}>
                                Add Website
                            </button>

                        </div>

                        <div id="bookmarkList">

                            {links.map((link, index) => (

                                <div
                                    className="bookmark-card"
                                    key={index}
                                >

                                    <span>{link.name}</span>

                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Open
                                    </a>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteWebsite(index)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </main >
        </div >
    );
}

export default Dashboard;