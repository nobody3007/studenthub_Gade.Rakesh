import { useState } from "react";

function GithubFetcher() {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);

    async function searchUser() {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        const data = await response.json();

        setUser(data);
    }

    return (

        <div className="main-text">

            <div
                className="container_github"
                style={{ width: "fit-content" }}
            >

                <h1>GITHUB Fetcher</h1>

                <input
                    style={{
                        backgroundColor: "yellow",
                        padding: "7px"
                    }}
                    type="text"
                    autoComplete="off"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button
                    onClick={searchUser}
                >
                    Search
                </button>

                <div>

                    {user && (
                        <>
                            <img
                                src={user.avatar_url}
                                width="100"
                                alt="avatar"
                            />

                            <h2>{user.login}</h2>

                            <p>{user.id}</p>

                            <p>Followers: {user.followers}</p>

                            <p>Following: {user.following}</p>

                            <p>Public Repos: {user.public_repos}</p>
                        </>
                    )}

                </div>

            </div>

        </div>
    );
}

export default GithubFetcher;