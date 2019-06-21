import React, { useContext } from 'react';
import UntappedContext from "../../context/untappd/untappdContext";
import Brewery from './Brewery';

const Breweries = () => {
    const untappdContext = useContext(UntappedContext);


    // return JSX to render.
    if (untappdContext.brewery_list.length === 0) {
        return (
            <React.Fragment/>
        )

    } else {
        return (
            <React.Fragment>
                <h3 className={"text-center mb-4"}>Search Results</h3>
                <div className={"row"}>
                    {untappdContext.brewery_list.map(item => (<Brewery key={item.brewery.brewery_id} brewery={item.brewery} location={item.brewery.location}/>))}
                </div>
            </React.Fragment>
        );
    }
};

export default Breweries;