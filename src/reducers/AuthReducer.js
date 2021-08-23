import {LOG_IN, LOG_OUT} from "../actions";

const initialState = {isLoggedIn: false, user: null};

const AuthReducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_IN:
            return {...state, isLoggedIn: true};
        case LOG_OUT:
            return {...state, isLoggedIn: false};
        default:
            return state;
    }
}
export default AuthReducer;