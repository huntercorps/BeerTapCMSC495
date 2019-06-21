import React, { useReducer } from 'react';
import axios from 'axios';
import UntappdContext from './untappdContext';
import UntappedReducer from './untappdReducer';

import {
    SET_LOGIN,
    SET_LOGIN_TOKEN,
    SET_LOADING,
    BEER_SEARCH,
    BREWERY_SEARCH,
    GET_BEER_INFO,
    GET_BREWERY_INFO,
    GET_USER_INFO
} from '../types';

//Global state
const UntappdState = props => {
    const initialState = {
        login: false,
        loginToken: "",
        loading: false,
        beer_list: [],
        beerInfo: {},
        brewery_list: [],
        breweryInfo: {},
        userInfo: {},
        userBeers: [],
    };

    const [state, dispatch] = useReducer(UntappedReducer, initialState);


    // Global Methods


    //setLogin
    const setLogin = () => dispatch({ type: SET_LOGIN });

    //setLoginToken
    const setLoginToken = (token) => {
        dispatch({ type: SET_LOGIN_TOKEN, payload: token });
        getUseInfo(token);
    };

    //setLoading
    const setLoading = () => dispatch({ type: SET_LOADING});

    //beerSearch
    const beerSearch = async text => {
        setLoading();

        if (state.loginToken === ""){
            console.log("not auth call");
            const res = await axios.get(
                `https://api.untappd.com/v4/search/beer?q=${text}?&client_id=${
                    process.env.REACT_APP_UNTAPPD_ID}&client_secret=${process.env.REACT_APP_UNTAPPD_SEC}`
            );

            dispatch({
                type: BEER_SEARCH,
                payload: res.data.response.beers.items
            });
        } else {
            console.log("auth call");
            const res = await axios.get(
                `https://api.untappd.com/v4/search/beer?q=${text}?&access_token=${state.loginToken}`
            );

            dispatch({
                type: BEER_SEARCH,
                payload: res.data.response.beers.items
            });
        }


    };

    //brewerySearch
    const brewerySearch = async text => {
        setLoading();

        if (state.loginToken === "") {
            const res = await axios.get(
                `https://api.untappd.com/v4/search/brewery?q=${text}?&client_id=${
                    process.env.REACT_APP_UNTAPPD_ID}&client_secret=${process.env.REACT_APP_UNTAPPD_SEC}`
            );

            dispatch({
                type: BREWERY_SEARCH,
                payload: res.data.response.brewery.items
            });
        } else {
            const res = await axios.get(
                `https://api.untappd.com/v4/search/brewery?q=${text}?&access_token=${state.loginToken}`
            );

            dispatch({
                type: BREWERY_SEARCH,
                payload: res.data.response.brewery.items
            });
        }

    };

    //getBeerInfo
    const getBeerInfo = async text => {
        setLoading();

        if (state.loginToken === "") {
            const res = await axios.get(
                `https://api.untappd.com/v4/beer/info/${text}?&client_id=${
                    process.env.REACT_APP_UNTAPPD_ID}&client_secret=${process.env.REACT_APP_UNTAPPD_SEC}`
            );
            dispatch({
                type: GET_BEER_INFO,
                payload: res.data.response.beer
            });
        } else {
            const res = await axios.get(
                `https://api.untappd.com/v4/beer/info/${text}?&access_token=${state.loginToken}`
            );
            dispatch({
                type: GET_BEER_INFO,
                payload: res.data.response.beer
            });
            console.log(res);
        }

    };

    //getBreweryInfo
    const getBreweryInfo = async text => {
        setLoading();

        if (state.loginToken === "") {
            const res = await axios.get(
                `https://api.untappd.com/v4/brewery/info/${text}?&client_id=${
                    process.env.REACT_APP_UNTAPPD_ID}&client_secret=${process.env.REACT_APP_UNTAPPD_SEC}`
            );
            dispatch({
                type: GET_BREWERY_INFO,
                payload: res.data.response.brewery
            });
        } else {
            const res = await axios.get(
                `https://api.untappd.com/v4/brewery/info/${text}?&access_token=${state.loginToken}`
            );
            dispatch({
                type: GET_BREWERY_INFO,
                payload: res.data.response.brewery
            });
        }
    };

    //getUserInfo
    const getUseInfo = async (token) => {
        const res = await axios.get(
            `https://api.untappd.com/v4/user/info?access_token=${token}`
        );
        dispatch({
            type: GET_USER_INFO,
            payload: res.data.response
        });
        console.log(res)
    };

    //getUserBeers
    const getUserBeers = async () => {

    };

    //setCheckin
    const setCheckin = async (beerId, gmt, zone, comment, rate, share) => {
        const querystring = require('querystring');
        const res = await axios.post(`https://api.untappd.com/v4/checkin/add?access_token=${state.loginToken}`,
            querystring.stringify({ gmt_offset: gmt, timezone: zone, bid: beerId, shout: comment, rating: rate, facebook: share })
        );
        console.log(res);
        return res.data.response.result === "success";
    };

    return (
        <UntappdContext.Provider
            value={{
                setLogin,
                login: state.login,
                setLoginToken,
                loginToken: state.loginToken,
                setLoading,
                loading: state.loading,
                beerSearch,
                beer_list: state.beer_list,
                getBeerInfo,
                beerInfo: state.beerInfo,
                brewerySearch,
                brewery_list: state.brewery_list,
                getBreweryInfo,
                breweryInfo: state.breweryInfo,
                setCheckin,
                userInfo:  state.userInfo,
                userBeers: state.userBeers
            }}
        >
            {props.children}
        </UntappdContext.Provider>

    );
};

export default UntappdState;

