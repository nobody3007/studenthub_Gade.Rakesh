import { Link } from "react-router-dom";
import Header from "../components/head.jsx";
import QuoteGenerator from "../components/QuoteGenerator.jsx";
import GithubFetcher from "../components/github_fetcher.jsx";


function Index() {
    return (
        <div className="background">
            <Header />
            <main>

                <h1 className="main-text">
                    Your Academic Journey Starts Here
                </h1>

                <div className="container">

                    <div className="content-box">

                        <img
                            src="/study.png"
                            width="300"
                            alt="image of study"
                        ></img>

                        <p className="content">
                            Track progress. Reach goals. Succeed.
                        </p>

                    </div>

                    <div className="image-contentbox">

                        <img
                            src="/newarrow.png"
                            width="100"
                            height="66"
                            alt="image of arrow"
                        ></img>

                    </div>

                    <div className="content-box">

                        <Link
                            to="/register"
                            className="journey"
                        >
                            click me to start your Journey.
                        </Link>

                    </div>

                </div>

                <br />

                <div className="quotes-container">

                    <QuoteGenerator />

                    <GithubFetcher />

                </div>

            </main>

            <footer>

            </footer>

        </div>
    );
}

export default Index;