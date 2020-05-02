import React from 'react'
import { loginAPI } from '../api/api';

const SET_LOGIN_STATE = "SET_LOGIN_STATE"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_USER_ID = "SET_USER_ID"

let initialState = {
  user_id: "",
  login: "",
  password: "",
  rememberMe: false,
  isFetching: false,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        login: action.login,
        password: action.password,
        rememberMe: action.rememberMe,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
      case SET_USER_ID:
        return {
          ...state,
          user_id: action.user_id,
        }
    default:
      return state
  }
};

export const setLoginState = (loginState) => ({type: SET_LOGIN_STATE, loginState});

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const setUserId = (user_id) => ({type: SET_IS_FETCHING, user_id});

export const loginUser = (LoginObj) => (dispatch) => {
  dispatch(setIsFetching(true))
  loginAPI.loginUser(LoginObj.login, LoginObj.password, LoginObj.rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        
        dispatch(setUserId(data.user_id))
      }
      dispatch(setIsFetching(false));
    })
}

export default loginReducer