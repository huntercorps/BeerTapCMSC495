import React, { Fragment } from 'react';
import BeerSearch from "../beer/BeerSearch";
import Beers from "../beer/Beers";

//--Functional component beer page--
const BeerPage = () => {

    // return JSX to render.
    return (
        <Fragment>
            <div className={"container"}>
                <BeerSearch/>
                <Beers/>
            </div>
        </Fragment>
    );
};

export default BeerPage;