import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import navbarReduser from './navbarReduser';
import userReduser from './usersReduser';
import authReduser from './authReduser';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: dialogsReduser,
    navbar: navbarReduser,
    usersPage: userReduser,
    auth: authReduser,
    form: formReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;