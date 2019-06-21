import React, { useState, useContext } from 'react';
import UntappdContext from "../../context/untappd/untappdContext";


//--Functional Component for BrewerySearch--
const BrewerySearch = () => {
    const untappdContext = useContext(UntappdContext);

    //Component State using web hooks.
    const [breweryName, setBreweryName] = useState('');

    //Functional Component method for search button press
    const onChange = (e) => {
        e.preventDefault();
        setBreweryName(e.target.value) };

    //Functional Component method for search button press
    const onSubmit = (e) => {
        e.preventDefault();
        untappdContext.brewerySearch(breweryName);
        setBreweryName('');
    };

    // return JSX to render.
    return (
        <div className={"card card-body mb-4"}>
            <h2 className="card-title text-center">
                <i className={"fas fa-beer"}> Search for Breweries</i>
            </h2>
            <h6 className={"lead text-center"}>Find Breweries and their Beers</h6>
            <form onSubmit={onSubmit} >
                <div className={"form-group"}>
                    <input
                        type={"text"}
                        className={"form-control form-control-lg"}
                        placeholder={"Brewery Name"}
                        name={"breweryName"}
                        value={breweryName}
                        onChange={onChange}
                    />
                </div>
                <button className={"btn btn-primary btn-lg btn-block mb-2"} type={"submit"} >Find Brewery</button>
            </form>
        </div>
    );
};

export default BrewerySearch;