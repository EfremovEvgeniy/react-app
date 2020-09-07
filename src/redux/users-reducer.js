import { usersAPI } from "../api/api"

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_TOTAL_USERS:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followUserSuccess = (id) => ({ type: FOLLOW_USER, id });
export const unfollowUserSuccess = (id) => ({ type: UNFOLLOW_USER, id });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS, count })
export const toggleIsfetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsfetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI
            .getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsfetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.unfollowUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowUserSuccess(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
        });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.followUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUserSuccess(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
        });
    }
}

export default usersReducer;