import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from '../actions/handleAuth';

const initialState = {
    isAuthenticated: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case AUTH_REQUEST:
            return state;
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }
        default:
            return state;
    }
}