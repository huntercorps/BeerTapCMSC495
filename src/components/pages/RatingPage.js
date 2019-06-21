import React, {useContext, useState, useEffect} from 'react';
import UntappdContext from "../../context/untappd/untappdContext";

const RatingPage = ({history}) => {
    const untappdContext = useContext(UntappdContext);
    const { beerInfo, setCheckin } = untappdContext;

    const [comments, setComment] = useState("");
    const [slider1, setSlider1] = useState(2.0);
    const [share, setSharing] = useState(false);


    const getGmtOffset = () => { return -(new Date().getTimezoneOffset() / 60) };

    const getZone = () => {
        return new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]};

    const submitRating = () => {
        setCheckin( beerInfo.bid, getGmtOffset(), getZone(), comments, slider1, share);
        history.goBack();
    };





    // return JSX to render.
    return (
        <div className={"container"}>
            <div className={"card"}>
                <div className={"card card-header"}>
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
                <div className={"card card-body"}>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Comments</label>
                            <div className="col-sm-10">
                            <textarea
                                maxLength="140"
                                rows={2}
                                className="form-control"
                                id="inputComments"
                                placeholder="What did you think?"
                                value={comments}
                                onChange=
                                    {event => {event.preventDefault();setComment(event.target.value)}}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 pt-0">Ratings</label>
                            <div className="col-sm-10">
                                <div className="form-group">
                                    <input className="custom-range" type="range" name="gridRadios" id="gridRadios1"
                                           value={slider1} min="1" max="5" step="0.5"
                                           onChange=
                                               {event => {event.preventDefault();setSlider1(event.target.value)}}/>
                                    <label className="form-check-label" htmlFor="gridRadios1">{slider1}</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={share}
                                                id="defaultCheck1"
                                                onClick = { event => {setSharing(!share)}}/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">Share Review on Facebook</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary text-center mx-auto mb-4" onClick={ submitRating }>Submit Rating</button>
                </div>
            </div>
        </div>
    );
};

export default RatingPage;
