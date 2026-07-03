import { useState } from "react";

function QuoteGenerator() {

    const quotes = [
        "Success is the sum of small efforts.",
        "Learning never exhausts the mind.",
        "Dream big. Work hard.",
        "Stay curious. Keep building.",
        "Every expert was once a beginner."
    ];

    const [quote, setQuote] = useState("Click the button to get a quote");

    function newQuote() {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    }

    return (
        <div className="main-text">

            <div className="container_quote">

                <h1>Quote Generator</h1>

                <p id="quote">
                    {quote}
                </p>

                <button id="btn" onClick={newQuote}>
                    new quote
                </button>

            </div>

        </div>
    );
}

export default QuoteGenerator;