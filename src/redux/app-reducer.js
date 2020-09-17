import { authUser } from "./auth-reducer";

const INITIALIZED_CUSSESS = 'SET-INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_CUSSESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_CUSSESS })

export const initializeApp = () => (dispatch) => {
    dispatch(authUser()).then(() => {
        dispatch(setInitializedSuccess());
    });
}

export default appReducer;