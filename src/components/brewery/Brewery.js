import React from 'react';
import {Link} from 'react-router-dom';


const Brewery = (props) => {
    const {brewery, location} = props;


    // return JSX to render.
    return (
        <div className={"col-md-6"}>
            <div className="card mb-3 shadow-sm">
                <div className={"card-header"}>
                    <div className="row no-gutters">
                        <div className="col-auto mr-2">
                            <img
                                src={brewery.brewery_label}
                                width={100}
                                height={100}
                                alt=""
                            />
                        </div>
                        <div className="col">
                            <h2>{brewery.brewery_name}</h2>
                            <p>{location.brewery_city}, {location.brewery_state}</p>
                        </div>
                    </div>
                </div>
                <div className="card-block px-2"/>
                <div className="card-footer w-100 text-muted">
                    <Link to={`/brewery/${brewery.brewery_id}`} className={"btn btn-dark btn-block"}>
                        <i className={"fas fa-chevron-right"}>View Details</i>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Brewery;