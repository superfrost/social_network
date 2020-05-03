import { getAuthUserData } from "./authReduser";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const InitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const InitializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(InitializedSuccess())
    })

  }

export default appReducer;
