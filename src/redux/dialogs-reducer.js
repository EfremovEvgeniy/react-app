const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Efrem",
            avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
        },
        {
            id: 2,
            name: "Artur",
            avaUrl: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
        },
        {
            id: 3,
            name: "Oleg",
            avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png",
        },
    ],
    messages: [
        { id: 1, text: "Hi" },
        { id: 2, text: "Yo" },
        { id: 3, text: "Privet" },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 7, text: action.message }],
            };
        default:
            return state;
    }
}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
export default dialogsReducer;