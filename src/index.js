import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import store from './redux/store'

let rerenderAllPage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderAllPage(store.getState());
store.subscribe(rerenderAllPage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
