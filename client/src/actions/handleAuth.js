export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export default function checkAuth(username, password) {
    return {
        type: AUTH_REQUEST,
        payload: {
            username: username,
            password: password
        }
    }
}

export function authSuccess() {
    return {
        type: AUTH_SUCCESS,
        payload: {
            isAuthenticated: true
        }
    }
}

export function authError() {
    return {
        type: AUTH_ERROR,
        payload: {
            isAuthenticated: false
        }
    }
}