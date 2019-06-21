import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UntappdContext from '../context/untappd/untappdContext';

//--Functional component Navbar--
const Navbar = () => {
    // destructuring for readability
    const untappdContext = useContext(UntappdContext);
    const { loginToken, setLoginToken } = untappdContext;


    const setButtonText = () =>{
        if (loginToken ==="") {
            return "login"
        } else {
            return "log out"
        }
    };

    const checkForLogout = () =>{
        if (loginToken === "") {
        } else {
            setLoginToken("");
        }
    };


    // return JSX to render.
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">BeerTap</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Beer"}>Beer Search
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Brewery"}>Brewery Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/About"} >About</Link>
                    </li>
                </ul>
                <a href={`https://untappd.com/oauth/authenticate/?client_id=${process.env.REACT_APP_UNTAPPD_ID}&response_type=token&redirect_url=https://beertapcmsc495.herokuapp.com/login/`}
                   className="btn btn-outline-primary my-2 my-sm-0" onClick={checkForLogout}
                >
                    {setButtonText()}
                </a>

            </div>
        </nav>
    );
};

export default Navbar;