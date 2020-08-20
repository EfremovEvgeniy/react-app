import { rerenderAllPage } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, text: "My first post", likesCount: 1 },
            { id: 2, text: "My second post", likesCount: 5 },
        ],
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

export let addPost = (postText) => {
    let newPost = { id: 5, text: postText, likesCount: 0 };
    state.profilePage.posts.push(newPost);
    rerenderAllPage(state);
}

export default state;