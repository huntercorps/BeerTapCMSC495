import React from 'react';



//--Functional component About page--
const AboutPage = () => {

    // return JSX to render.
    return (
        <React.Fragment>
            <div className={"container text-center"}>
                <h1>About Page</h1>
                <br/>
                <h4>Beer Tap App: Protoype</h4>
                <p>Web Master: Hunter Smith</p>
                <p>Version: 1.0.0</p>
                <br/>
                <p>Powered by Untappd</p>
            </div>
        </React.Fragment>
    );
};

export default AboutPage;

