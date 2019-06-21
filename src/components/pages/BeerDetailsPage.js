import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import UntappdContext from "../../context/untappd/untappdContext";
import RatingStars from "../RatingStars";
import Beer from "../beer/Beer";


const BeerDetailsPage = ({ match, history }) => {
    const untappdContext = useContext(UntappdContext);
    const { beerInfo, loading} = untappdContext;


    // call on component mount
    useEffect( () => {
        untappdContext.getBeerInfo(match.params.id);
        // eslint-disable-next-line
    }, [match.params.id]);


    // if logged in show rate button ???move this to untappd state.
    const showRatingBtn = () => {
        if (untappdContext.login === true){
            return <Link to={`/beer/${beerInfo.bid}/rate`} className="btn btn-dark btn-sm mb-4 mt-4">Rate Beer</Link>

        } else {
            return <React.Fragment/>
        }
    };


    // return JSX to render.
    if (loading || Object.keys(beerInfo).length === 0 ){
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
                {showRatingBtn()}

                <div className="card">
                    <div className={"card-header"}>
                        <div className="row no-gutters">
                            <div className="col-auto mr-2">
                                <img
                                    src={beerInfo.beer_label}
                                    width={100}
                                    height={100}
                                    alt=""/>
                            </div>
                            <div className="col">
                                <h2>{beerInfo.beer_name}</h2>
                                <p>{beerInfo.brewery.brewery_name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-block px-2">
                        <div id="accordion">
                            <ul className={"list-group mt-3"}>
                                <li className={"list-group-item"}>
                                    <strong>Rating: </strong> <RatingStars value={beerInfo.rating_score}/>
                                </li>
                                    <li className={"list-group-item"} id={"headingOne"}>
                                        <button className="card-title btn-link " data-toggle={"collapse"} data-target={"#collapseOne"} aria-expanded={"true"} aria-controls={"collapseOne"}>Description</button>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordion">
                                            <p className="card-text">{beerInfo.beer_description === ""? "No Description Available":beerInfo.beer_description}</p>
                                        </div>
                                    </li>
                                <li className={"list-group-item"}>
                                    <strong>Style: </strong> {beerInfo.beer_style}
                                </li>
                                <li className={"list-group-item"}>
                                    <strong>ABV: </strong> {beerInfo.beer_abv}<strong className={"ml-4"}>IBU: </strong> {beerInfo.beer_ibu}
                                </li>
                                <li className={"list-group-item"}>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-footer w-100 text-muted">
                        <h5 className={"text-center mb-4"}>{"Similar Beers"}</h5>
                        <div className={"row"}>
                            {beerInfo.similar.items.map(item => (
                                <Beer key={item.beer.bid} beer={item.beer} brewery={item.brewery}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


};

export default BeerDetailsPage;