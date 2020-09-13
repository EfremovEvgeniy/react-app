import { profileAPI, usersAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_USER = 'SET-CURRENT-USER';

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
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setCurrentUserData = (currentUser) => ({ type: SET_CURRENT_USER, currentUser })

export const authUser = () => {
    return (dispatch) => {
        usersAPI.authMe().then((data) => {
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
export default authReducer;