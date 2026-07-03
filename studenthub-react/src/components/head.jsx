import { Link } from "react-router-dom";
import DarkMode from "../components/darkmode.jsx";
function header() {
    return (
        <header>

            <nav className="nav-register">
                <div>
                    <b>
                        <Link className="box" to="/register">
                            Register
                        </Link>
                    </b>
                </div>
            </nav>

            <div className="logo">
                <Link to="/">
                    <img
                        src="/iste.jpg"
                        alt="logo"
                        width="100"
                    />
                </Link>
            </div>

            <nav>

                <DarkMode />
                <h1 className="main-text">
                    StudentHub project

                    <hr className="lines" />

                    <div className="nav">
                        <Link className="box" to="/dashboard">
                            Dashboard
                        </Link>

                        <Link className="box" to="/about">
                            About
                        </Link>
                    </div>

                    <hr className="lines" />
                </h1>

            </nav>

        </header>
    )
}
export default header;