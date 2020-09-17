import { profileAPI, authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_USER = 'SET-CURRENT-USER';
const CLEAR_UP_USER_DATA = 'CLEAR-UP-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isCurrentUserSetted: false,
    currentUser: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isCurrentUserSetted: true,
                currentUser: action.currentUser,
            }
        case CLEAR_UP_USER_DATA:
            return {
                state,
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setCurrentUserData = (currentUser) => ({ type: SET_CURRENT_USER, currentUser })
export const clearUpUserData = () => ({ type: CLEAR_UP_USER_DATA })

export const authUser = () => (dispatch) => {
    return authAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setUserData(id, email, login));
            dispatch(setCurrentUser(id));
        }
    });
}

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(authUser())
            } else {
                dispatch(stopSubmit('login', {
                    _error: data.messages[0] || 'Smth wrong',
                }));
            }
        });
    }
}

export const setCurrentUser = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId).then((data) => {
        dispatch(setCurrentUserData(data));
    });
}

export const logoutUser = () => {
    return (dispatch) => {
        authAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(clearUpUserData())
            }
        });
    }
}
export default authReducer;