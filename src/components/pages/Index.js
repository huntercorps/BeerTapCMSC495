import React, {useContext} from 'react';
import Logo from '../../res/AppLogo.png';
import UntappdContext from "../../context/untappd/untappdContext";


//--Functional component home page--
const Index = () => {
    const untappdContext = useContext(UntappdContext);
    const { userInfo } = untappdContext;



    // return JSX to render.
    if (userInfo === undefined || Object.keys(userInfo).length === 0) {
        return(
            <React.Fragment>
                <div className={"container text-center"}>
                    <h1>Welcome To BeerTap</h1>
                    <br/>
                    <img className={"img-fluid"} src={Logo} alt={"LOGO"}/>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
            <div className={"container text-center"}>
            <h1>Welcome To BeerTap {userInfo.user.first_name}</h1>
    <br/>
    <img className={"img-fluid"} src={Logo} alt={"LOGO"}/>
    </div>
    </React.Fragment>
        );
    }

};

export default Index;