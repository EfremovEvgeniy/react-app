const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [],
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
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW_USER, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW_USER, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;