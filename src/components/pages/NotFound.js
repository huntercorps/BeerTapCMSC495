import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import UntappdContext from "../../context/untappd/untappdContext";

const NotFound = (props) => {
    const untappdContext = useContext(UntappdContext);

    const {location} = props;


    if (location.pathname === "/login/"){
        let token = location.hash.replace("#access_token=","");
        untappdContext.setLoginToken(token);
        untappdContext.setLogin();
        return <Redirect to={"/"} />
    } else{
        return (
            <React.Fragment>
                <h1>Not Found</h1>
                <p className='lead'>The page you are looking for does not exist...</p>
            </React.Fragment>
        );
    }

};

export default NotFound;