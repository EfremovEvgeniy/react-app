import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

let dialogs = [
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
];

let messages = [
  { id: 1, text: "Hi" },
  { id: 2, text: "Yo" },
  { id: 3, text: "Privet" },
];

let posts = [
  { id: 1, text: "My first post", likesCount: 1 },
  { id: 2, text: "My second post", likesCount: 5 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
