import React, { useState, useContext} from 'react';
import UntappdContext from '../../context/untappd/untappdContext';


//--Functional component for BeerSearch --
const BeerSearch = () => {
    const untappdContext = useContext(UntappdContext);

    //Component State using web hooks.
    const [beerName, setBeerName] = useState('');

    //Functional Component method to update textfield
    const onChange = (e) => { e.preventDefault(); setBeerName(e.target.value) };

    //Functional Component method for search button press
    const onSubmit = (e) => {
        e.preventDefault();
        untappdContext.beerSearch(beerName);
        setBeerName('');
    };


    // return JSX to render.
    return (
        <div className={"card card-body mb-4"}>
            <h2 className="card-title text-center">
                <i className={"fas fa-beer"}> Search for Beer</i>
            </h2>
            <h6 className={"lead text-center"}>Find And Rate Beer</h6>
            <form onSubmit={onSubmit}>
                <div className={"form-group"}>
                    <input
                        type={"text"}
                        className={"form-control form-control-lg"}
                        placeholder={"Beer Name"}
                        name={"beerName"}
                        value={beerName}
                        onChange={onChange}
                    />
                </div>
                <button className={"btn btn-primary btn-lg btn-block mb-2"} type={"submit"}>Find Beer</button>
            </form>
        </div>
    );
};

export default BeerSearch;
