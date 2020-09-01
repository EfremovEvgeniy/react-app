const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const TOOGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case TOOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW_USER, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW_USER, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_USERS, count })
export const toggleIsfetchingAC = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export default usersReducer;