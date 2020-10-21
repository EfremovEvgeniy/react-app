import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state;
    }
}

export const addPost = (post) => ({ type: ADD_POST, post });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setProfile(data));
    }
}

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileStatus(userId)
        dispatch(setStatus(data));
    }
}

export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateProfileStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}
export default profileReducer;