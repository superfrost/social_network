import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_IS_FETCHING = 'SET_PROFILE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'
const SET_USER_POSTS = 'SET_USER_POSTS'

let initialState = {
    posts: [],
    friends: [
        {id: 1, name: 'Anton', photoSrc: 'https://www.famousbirthdays.com/faces/clooney-george-image.jpg'},
        {id: 2, name: 'Lera', photoSrc: 'https://www.famousbirthdays.com/headshots/zoe-saldana-5.jpg'},
        {id: 3, name: 'Nick', photoSrc: 'https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg'},
        {id: 4, name: 'Ben', photoSrc: 'https://www.famousbirthdays.com/headshots/ben-stiller-4.jpg'},
        {id: 5, name: 'Kate', photoSrc: 'https://www.famousbirthdays.com/faces/banks-tyra-image.jpg'},
        {id: 6, name: 'John', photoSrc: 'https://www.famousbirthdays.com/headshots/dwayne-johnson-9.jpg'},
        {id: 7, name: 'B.Kingsley', photoSrc: 'https://www.famousbirthdays.com/thumbnails/kingsley-ben-large.jpg'},
        {id: 8, name: 'Will Smit', photoSrc: 'https://www.famousbirthdays.com/headshots/will-smith-1.jpg'}
    ],
    myProfile: null,
    profileIsFetching: true,
    status: ''
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let now = new Date();
            let formatDate = (date) => {
                return date.toLocaleString('ru', {
                    day:   '2-digit',
                    month: '2-digit',
                    year:  '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            }
            let newPost = {
                id: 17,
                person_id: 1,
                date: formatDate(now),
                message: action.text,
                like_count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                myProfile: action.profile,
            };
        }
        case SET_PROFILE_IS_FETCHING: {
            return {
                ...state,
                profileIsFetching: action.isFetching,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        default:
            return state;
    }
}

export const addPost = (text) => {
    return { type: ADD_POST, text }
};

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
};

export const setProfileIsFetching = (isFetching) => {
    return { type: SET_PROFILE_IS_FETCHING, isFetching }
};

export const setStatus = (status) => {
    return { type: SET_STATUS, status }
};

export const setUserPosts = (posts) => {
    return { type: SET_USER_POSTS, posts}
}

export const getStatus = (user_id) => {
    return (dispatch) => {
        profileAPI.getStatus(user_id)
            .then(data => {
                if(!data.status) {
                    dispatch(setStatus(null))
                } else {
                    dispatch(setStatus(data.status.status))
                }
        })
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    })
}

export const getProfile = (user_id) => {
    return (dispatch) => {
        dispatch(setProfileIsFetching(true))
        profileAPI.getUserProfile(user_id)
            .then(data => {
                dispatch(setProfileIsFetching(false))
                dispatch(setUserProfile(data))
        })
    }
}

export const getPosts = (user_id) => (dispatch) => {
    profileAPI.getUserPosts(user_id)
    .then(data => {
        dispatch(setUserPosts(data))
    })
}

export default profileReduser;