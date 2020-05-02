import { authentificateAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  userPhoto: null,
  rememberMe: false,
  password: null,
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

export const setAuthUserData = (id, email, login, userPhoto, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, userPhoto, isAuth },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authentificateAPI.authentificateMe()
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          let userPhoto = null;
          dispatch(setAuthUserData(id, email, login, userPhoto, true));
          usersAPI.getUserProfile(id)
          .then((data) => {
            userPhoto = data.photo_src;
            dispatch(setAuthUserData(id, email, login, userPhoto, true));
          })
        }
      })
  }
}

export const loginUser = (LoginObj) => (dispatch) => {
  authentificateAPI.loginUser(LoginObj.login, LoginObj.password, LoginObj.rememberMe, true)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
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
