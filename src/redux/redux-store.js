import { createStore, combineReducers } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({ profilePage: profileReducer, dialogsPage: dialogsReducer, navbar: navbarReducer, usersPage: usersReducer });

let store = createStore(reducers);

export default store;