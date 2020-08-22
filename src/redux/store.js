let store = {
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = { id: 5, text: this._state.profilePage.newPostText, likesCount: 0 };
        this._pushNewPost(newPost);
        this._updateStateNewPostText('');
        this._subscriber(this._state);
    },
    updateNewPostText(newText) {
        this._updateStateNewPostText(newText);
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
        },
        navbar: {
            friends: [
                { id: 1, name: "Ivan", avaUrl: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" },
                { id: 2, name: "Oleg", avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" },
                { id: 3, name: "Anton", avaUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" },
            ]
        }
    },
    _pushNewPost(newPost) {
        this._state.profilePage.posts.push(newPost);
    },
    _updateStateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
    },
}

export default store;