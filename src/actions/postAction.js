import { REQUEST_AUTH, AUTH_SUCCESS, AUTH_FAIL } from './types'
import axios from "axios";

export const requestAuth = function () {
    return {
        type: REQUEST_AUTH
    }
};

export const authSuccess = function (response) {
    return {
        type: AUTH_SUCCESS,
        response: response
    }
};

export const authFail = function (response) {
    return {
        type: AUTH_FAIL,
        response: response
    }
};


export const authenticate = (creds) => dispatch => {

    //dispatch(requestAuth);
    return axios.post(`http://localhost:3005/api/users/login`, creds)
        .then(response => {
            dispatch(authSuccess(response));
            alert("Successful")
        })
        .catch(error => {
            dispatch(authFail(error))
            alert("Unsuccessful")
        })
}
