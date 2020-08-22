let rerenderAllPage = () => {
    console.log('state chnged')
}

let state = {
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
}

export let addPost = () => {
    let newPost = { id: 5, text: state.profilePage.newPostText, likesCount: 0 };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderAllPage(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAllPage(state);
}

export const subscribe = (observer) => {
    rerenderAllPage = observer;
}
export default state;