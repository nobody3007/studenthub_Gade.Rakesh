import { useState, useEffect } from "react";
import Header from "../components/head.jsx";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const storedusername = localStorage.getItem("username");
    useEffect(() => {
        if (storedusername != null) {
            navigate("/dashboard");
        }
    }, []);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function generate(passwordlength, includelowercase, includeuppercase, includenumber, includesymbols) {

        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const symbol = "!@#$%^&()_+-=*";

        let allowedChars = "";
        let password = "";

        allowedChars += includelowercase ? lowercase : "";
        allowedChars += includeuppercase ? uppercase : "";
        allowedChars += includenumber ? number : "";
        allowedChars += includesymbols ? symbol : "";

        if (passwordlength <= 0) {
            return "(password length must be greater than 0)";
        }

        if (allowedChars.length === 0) {
            return "(at least one must be selected)";
        }

        for (let i = 0; i < passwordlength; i++) {
            const randomindex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomindex];
        }

        return password;
    }

    function generatePassword() {

        const newPassword = generate(
            15,
            true,
            true,
            true,
            true
        );

        setPassword(newPassword);
    }

    function login(event) {

        event.preventDefault();

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

        window.location.href = "/dashboard";
    }

    return (
        <div>
            <Header />

            <main>
                <form id="regform" onSubmit={login}>

                    <table align="center" className="reg-box">

                        <tbody>

                            <tr>
                                <td><b className="values">Email address</b></td>

                                <td>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><b className="values">User-Name</b></td>

                                <td>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </td>
                            </tr>

                            <tr className="tabel">
                                <td><b className="values">Password</b></td>

                                <td>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>

                                    <button
                                        style={{ fontSize: "10px" }}
                                        type="button"
                                        onClick={generatePassword}
                                    >
                                        generate a custom password
                                    </button>

                                </td>

                                <td>
                                    <input
                                        type="submit"
                                        value="login"
                                    />
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>
            </main>
        </div>
    );
}

export default Register;
