import { authentificateAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import LocalStorageService from "../env/LocalStorage";

const localStorageService = LocalStorageService.getService();
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  userPhoto: null,
  rememberMe: false,
  password: null,
  token: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, userPhoto = null, isAuth, token = null) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, userPhoto, isAuth, token },
});

export const getAuthUserData = (token = null) => (dispatch) => {
  return authentificateAPI.authentificateMe(token)
    .then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login, null, true, token));
          
          usersAPI.getUserProfile(id)
          .then((data) => {
            dispatch(setAuthUserData(id, email, login, data.photo_src, true, token));
          })
        } 
      })
  }

export const loginUser = (LoginObj) => (dispatch) => {
  return authentificateAPI.loginUser(LoginObj.login, LoginObj.password, LoginObj.rememberMe, true)
    .then(data => {
      if (data.resultCode === 0) {
        let newToken = localStorageService.setToken(data.token)
        console.log(localStorageService.getAccessToken())
        dispatch(getAuthUserData(data.token))
      } else {
        let action = stopSubmit("login", {_error: data.error})
        dispatch(action)
      }
    })
}

export const logoutUser = (LoginObj) => (dispatch) => {
  return authentificateAPI.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
      }
    })
}

export default authReduser;
