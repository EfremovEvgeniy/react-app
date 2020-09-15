import { profileAPI, authAPI } from "../api/api";

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

export const authUser = () => {
    return (dispatch) => {
        authAPI.authMe().then((data) => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setUserData(id, email, login));
            }
        });
    }
}

export const setCurrentUser = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data) => {
            dispatch(setCurrentUserData(data));
        });
    }
}

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(authUser())
                setCurrentUser(data.data.userId);
            }
        });
    }
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