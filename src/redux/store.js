const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { id: 5, text: this._state.profilePage.newPostText, likesCount: 0 };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._subscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._subscriber(this._state);
        }
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

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;