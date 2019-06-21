import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
//Import Website Pages from "./components/pages
import AboutPage from "./components/pages/AboutPage";
import Index from "./components/pages/Index";
import BeerPage from "./components/pages/BeerPage";
import BreweryPage from "./components/pages/BreweryPage";
import NotFound from "./components/pages/NotFound";
//import components
import Navbar from './components/Navbar';
import UntappdState from "./context/untappd/UntappdState";
import BeerDetailsPage from './components/pages/BeerDetailsPage';
import BreweryDetailsPage from "./components/pages/BreweryDetailsPage";
import RatingPage from "./components/pages/RatingPage";


//--Functional component App--
const App = () => {

    return (
        <UntappdState>
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Index}/>
                    <Route exact path={"/Beer"} component={BeerPage}/>
                    <Route exact path={"/Beer/:id"} component={BeerDetailsPage}/>
                    <Route exact path={"/Beer/:id/rate"} component={RatingPage}/>
                    <Route exact path={"/Brewery"} component={BreweryPage}/>
                    <Route exact path={"/brewery/:id"} component={BreweryDetailsPage}/>
                    <Route exact path={"/About"} component={AboutPage}/>
                    <Route path={"/login/:id"} component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
        </UntappdState>

    );
};

export default App;
