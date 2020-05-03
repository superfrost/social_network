import { authentificateAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
      //debugger
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

export const getAuthUserData = (token) => {
  debugger
  return (dispatch) => {
    authentificateAPI.authentificateMe(token)
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
}

export const loginUser = (LoginObj) => (dispatch) => {

  
  // let action = stopSubmit("login", {_error: "Incorrect Login or Password"})
  // dispatch(action)

  authentificateAPI.loginUser(LoginObj.login, LoginObj.password, LoginObj.rememberMe, true)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData(data.token))
      } else {
        debugger
        let action = stopSubmit("login", {_error: data.error})
        dispatch(action)
      }
    })
}

export const logoutUser = (LoginObj) => (dispatch) => {
  authentificateAPI.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
      }
    })
}

export default authReduser;
