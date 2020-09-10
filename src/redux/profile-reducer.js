import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

let initialState = {
    posts: [],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, text: state.newPostText, likesCount: 0 }],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
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
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addPost = () => ({ type: ADD_POST });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status })

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((data) => {
            dispatch(setProfile(data));
        });
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileStatus(userId).then((data) => {
            dispatch(setStatus(data));
        });
    }
}
export default profileReducer;