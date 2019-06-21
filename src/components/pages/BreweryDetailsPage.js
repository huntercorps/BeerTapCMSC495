import React, { useContext, useEffect} from 'react';
import Beer from "../beer/Beer";
import UntappdContext from "../../context/untappd/untappdContext";


const BreweryDetailsPage = ({match, history}) => {
    const untappdContext = useContext(UntappdContext);
    const { breweryInfo, loading } = untappdContext;


    //hook for on component and params update
    useEffect( () => {
        untappdContext.getBreweryInfo(match.params.id);
        // eslint-disable-next-line
    }, [match.params.id]);


    // return JSX to render.
    if (loading || breweryInfo === undefined || Object.keys(breweryInfo).length === 0) {
        return (
            <div className={"container text-center mt-5"}>
                <div className="spinner-border text-primary mx-auto" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

    } else {
        return (
            <div className={"container"}>
                <span className={"mr-2"}>
                    <button className={"btn btn-dark btn-sm mb-4 mt-4"} onClick={history.goBack}>Go Back</button>
                </span>

                <div className="card">
                    <div className={"card-header"}>
                        <div className="row no-gutters">
                            <div className="col-auto mr-2">
                                <img
                                    src={breweryInfo.brewery_label}
                                    width={100}
                                    height={100}
                                    alt=""/>
                            </div>
                            <div className="col">
                                <h2>{breweryInfo.brewery_name}</h2>
                                <p>{breweryInfo.location.brewery_address} {breweryInfo.location.brewery_city}, {breweryInfo.location.brewery_state}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-block px-2">
                        <ul className={"list-group mt-3"}>
                            <li className={"list-group-item"}>
                                <h4 className="card-title">Description</h4>
                                <p className="card-text">{breweryInfo.brewery_description === ""? "No Description Available": breweryInfo.brewery_description}</p>
                            </li>
                            <li className={"list-group-item"}>
                                <h6 className="card-text">
                                    <strong>Brewery Type: </strong>
                                    {breweryInfo.brewery_type}
                                </h6>
                            </li>
                            <li className={"list-group-item"}>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer w-100 text-muted">
                        <h4 className={"text-center mb-4"}>{"Beer List"}</h4>
                        <div className={"row"}>
                            {breweryInfo.beer_list.items.map(item => (
                                <Beer key={item.beer.bid} beer={item.beer} brewery={item.brewery}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            );
    }

};


export default BreweryDetailsPage;

