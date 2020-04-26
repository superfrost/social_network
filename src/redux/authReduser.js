const SET_USER_DATA = 'SET_USER_DATA';

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
}

export const setAuthUserData = (id, email, login, userPhoto) => ({ 
    type: SET_USER_DATA, data: {id, email, login, userPhoto}
});

export default authReduser;