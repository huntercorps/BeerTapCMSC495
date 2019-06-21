import React from 'react';

// class to convert float value to star rating . needs refactoring!!
const RatingStars = (props) => {
    const {value} = props;
    let tenth = (Math.ceil(value.toFixed(1)*2)/2).toString().match(/^-?\d+(?:\.\d{0,1})?/)[0];

    switch (tenth) {

        case '0.5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star-half-alt"/><i className="far fa-star"/><i className="far fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '1' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="far fa-star"/><i className="far fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '1.5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star-half-alt"/><i className="far fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '2' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="far fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '2.5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star-half-alt"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '3' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '3.5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/>
                    <i className="fas fa-star-half-alt"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '4' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i
                    className="fas fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        case '4.5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i
                    className="fas fa-star"/><i className="fas fa-star-half-alt"> ({tenth})</i>
                </React.Fragment>
            );
        case '5' :
            return (
                <React.Fragment>
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i
                    className="fas fa-star"/><i className="fas fa-star"> ({tenth})</i>
                </React.Fragment>
            );
        default:
            return (
                <React.Fragment>
                    <i className="far fa-star"/><i className="far fa-star"/><i className="far fa-star"/><i
                    className="far fa-star"/><i className="far fa-star"> ({tenth})</i>
                </React.Fragment>
            );
    }
};

export default RatingStars;