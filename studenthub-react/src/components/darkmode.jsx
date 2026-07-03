import { useState, useEffect } from "react";


function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <div className="nighmode">
            <button id="darkmode" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "🌙" : "☀️"}
            </button>
        </div>
    );

}

export default DarkMode;