import {
    SET_LOGIN,
    SET_LOGIN_TOKEN,
    BEER_SEARCH,
    GET_BEER_INFO,
    BREWERY_SEARCH,
    GET_BREWERY_INFO,
    SET_LOADING,
    GET_USER_INFO
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: !state.login};

        case SET_LOGIN_TOKEN:
            return {...state, loginToken: action.payload};

        case SET_LOADING:
            return {...state, loading: true};

        case BEER_SEARCH:
            return {
                ...state, beer_list: action.payload, loading:false};

        case GET_BEER_INFO:
            return {
                ...state, beerInfo: action.payload, loading:false};

        case BREWERY_SEARCH:
            return {
                ...state, brewery_list: action.payload, loading:false};

        case GET_BREWERY_INFO:
            return {...state, breweryInfo: action.payload, loading:false};

        case GET_USER_INFO:
            return {...state, userInfo: action.payload, userBeers: action.payload.user.checkins.items};

        default: return  state;
    }
}