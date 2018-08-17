import { REQUEST_AUTH, AUTH_SUCCESS, AUTH_FAIL } from '../actions/types';

export default function login(state = {
    isAuthenticating: false,
    isLoggedIn: false,
    authenticationToken: '',
    authError: null
}, action) {
    switch (action.type) {
        case REQUEST_AUTH:
            return Object.assign({}, state, {
                isAuthenticating: true
            });
            break;
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isLoggedIn: true,
                authenticationToken: action.response.token
            });
            break;
        case AUTH_FAIL:
            return Object.assign({}, state, {
                isAuthenticating: false,
                authError: action.response.error
            });
            break;
        default:
            return state;

    }
}