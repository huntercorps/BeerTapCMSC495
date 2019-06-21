import React, { useContext } from 'react';
import UntappdContext from "../../context/untappd/untappdContext";
import Beer from './Beer';

const Beers = () => {
    const untappdContext = useContext(UntappdContext);
    const { beer_list, loading } = (untappdContext);


    // return JSX to render.
    if (loading) {
        return <React.Fragment/>
    } else {
        return (
            <React.Fragment>
                <h3 className={"text-center mb-4"}>{beer_list.length > 0? "Search Results": ""}</h3>
                <div className={"row"}>
                    {beer_list.map(item => (<Beer key={item.beer.bid} beer={item.beer} brewery={item.brewery}/>))}
                </div>
            </React.Fragment>
        );
    }
};

export default Beers;