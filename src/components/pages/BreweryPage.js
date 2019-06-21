import React from 'react';
import BrewerySearch from "../brewery/BrewerySearch";
import Breweries from "../brewery/Breweries";

//--Functional component BreweryPage--
const BreweryPage = () => {

    // return JSX to render.
    return (

            <div className={"container"}>
                <BrewerySearch/>
                <Breweries/>
            </div>
    );
};

export default BreweryPage;