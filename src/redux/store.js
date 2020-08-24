import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._subscriber(this._state);
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    _subscriber(state) {
        console.log('no subscribers')
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: "My first post", likesCount: 1 },
                { id: 2, text: "My second post", likesCount: 5 },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
                { id: 1, name: "Ivan", avaUrl: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" },
                { id: 2, name: "Oleg", avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" },
                { id: 3, name: "Anton", avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" },
            ]
        }
    },
}

export default store;