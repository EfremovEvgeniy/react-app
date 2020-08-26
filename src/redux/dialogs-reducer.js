const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 7, text: state.newMessageText }],
                newMessageText: '',
            };
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export default dialogsReducer;