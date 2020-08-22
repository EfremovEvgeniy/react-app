import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import state, { subscribe, addPost, updateNewPostText } from './redux/state'

let rerenderAllPage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderAllPage(state);
subscribe(rerenderAllPage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
