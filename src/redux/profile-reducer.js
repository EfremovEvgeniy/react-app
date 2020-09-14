import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, text: action.post, likesCount: 0 }],
            };
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

export const addPost = (post) => ({ type: ADD_POST, post });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data) => {
            dispatch(setProfile(data));
        });
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId).then((data) => {
            dispatch(setStatus(data));
        });
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}
export default profileReducer;