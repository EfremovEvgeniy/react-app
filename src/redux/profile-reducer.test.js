const { default: profileReducer, addPost } = require("./profile-reducer");
import React from 'react';

it('length of post should increase', () => {
    let action = addPost('new post');
    let state = {
        posts: [],
    }
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
    expect(newState.posts[0].text).toBe('new post');
});