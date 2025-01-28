import React from "react";

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <div className="rectangle">
                    <a id={"smabf-logo"} href={"https://smabf.ir"} target={"_blank"} rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/SMABF.png`} className="Home-logo" alt="logo"/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Home;