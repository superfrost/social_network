import { createStore, combineReducers } from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import navbarReduser from './navbarReduser';
import userReduser from './usersReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: dialogsReduser,
    navbar: navbarReduser,
    usersPage: userReduser,
})

let store = createStore(redusers);

window.store = store

export default store;