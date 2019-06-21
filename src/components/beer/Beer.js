import React from 'react';
import {Link} from 'react-router-dom';


const Beer = (props) => {
    const {beer, brewery} = props;


    return (
        <div className={"col-md-6"}>
            <div className="card mb-3 shadow-sm">
                <div className={"card-header"}>
                    <div className="row no-gutters">
                        <div className="col-auto mr-2">
                            <img
                                src={beer.beer_label}
                                width={100}
                                height={100}
                                alt=""/>
                        </div>
                        <div className="col">
                            <h5>{beer.beer_name}</h5>
                            <h6>{brewery.brewery_name}</h6>
                            <small className="text-muted">{beer.beer_style}</small>
                        </div>
                    </div>
                </div>
                <div className="card-block px-2"/>
                <div className="card-footer w-100 text-muted">
                    <Link to={`/beer/${beer.bid}`} className={"btn btn-dark btn-block"}>
                        <i className={"fas fa-chevron-right"}>View Details</i>
                    </Link>
                </div>
            </div>
        </div>
    )


};

export default Beer;