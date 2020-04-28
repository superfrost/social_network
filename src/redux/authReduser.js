import { authentificateAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  userPhoto: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      //debugger
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, userPhoto) => ({
  type: SET_USER_DATA,
  data: { id, email, login, userPhoto },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authentificateAPI.authentificateMe()
    .then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        let userPhoto = null;
        dispatch(setAuthUserData(id, email, login, userPhoto));
        usersAPI.getUserProfile(id)
        .then((data) => {
          userPhoto = data.photo_src;
          dispatch(setAuthUserData(id, email, login, userPhoto));
        });
      }
    });
  };
};

export default authReduser;
