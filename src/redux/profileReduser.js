import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_IS_FETCHING = "SET_PROFILE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const SET_USER_POSTS = "SET_USER_POSTS";
const SET_USER_FRIENDS = "SET_USER_FRIENDS";


let initialState = {
  posts: [],
  friends: [
  // {id: 1, name: 'Anton', photoSrc: 'https://www.famousbirthdays.com/faces/clooney-george-image.jpg'},
  // {id: 2, name: 'Lera', photoSrc: 'https://www.famousbirthdays.com/headshots/zoe-saldana-5.jpg'},
  // {id: 3, name: 'Nick', photoSrc: 'https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg'},
  // {id: 4, name: 'Ben', photoSrc: 'https://www.famousbirthdays.com/headshots/ben-stiller-4.jpg'},
  // {id: 5, name: 'Kate', photoSrc: 'https://www.famousbirthdays.com/faces/banks-tyra-image.jpg'},
  // {id: 6, name: 'John', photoSrc: 'https://www.famousbirthdays.com/headshots/dwayne-johnson-9.jpg'},
  // {id: 7, name: 'B.Kingsley', photoSrc: 'https://www.famousbirthdays.com/thumbnails/kingsley-ben-large.jpg'},
  // {id: 8, name: 'Will Smit', photoSrc: 'https://www.famousbirthdays.com/headshots/will-smith-1.jpg'}
],
  myProfile: null,
  profileIsFetching: true,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: action.postObj.id,
        person_id: action.postObj.person_id,
        date: action.postObj.date,
        message: action.postObj.message,
        like_count: action.postObj.like_count,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.post_id),
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
        posts: action.posts,
      };
    }
    case SET_USER_FRIENDS: {
      return {
        ...state,
        friends: action.friends,
      };
    }
    default:
      return state;
  }
};

export const addPost = (postObj) => {
  return { type: ADD_POST, postObj };
};

export const deletePost = (post_id) => {
  return { type: DELETE_POST, post_id };
};


export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setProfileIsFetching = (isFetching) => {
  return { type: SET_PROFILE_IS_FETCHING, isFetching };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const setUserPosts = (posts) => {
  return { type: SET_USER_POSTS, posts };
};

export const setUserFriends = (friends) => {
  return { type: SET_USER_FRIENDS, friends };
};

export const getStatus = (user_id) => {
  return (dispatch) => {
    profileAPI.getStatus(user_id)
    .then((data) => {
      if (!data.status) {
        dispatch(setStatus(null));
      } else {
        dispatch(setStatus(data.status.status));
      }
    });
  };
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const getProfile = (user_id) => {
  return (dispatch) => {
    dispatch(setProfileIsFetching(true));
    profileAPI.getUserProfile(user_id)
    .then((data) => {
      dispatch(setProfileIsFetching(false));
      dispatch(setUserProfile(data));
    });
  };
};

export const getPosts = (user_id) => (dispatch) => {
  profileAPI.getUserPosts(user_id)
  .then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserPosts(data.posts));
    }
  });
};

export const sendPost = (user_id, post) => (dispatch) => {
  profileAPI.sendUserPost(user_id, post)
  .then((data) => {
    if (data.resultCode === 0) {
      dispatch(addPost(data.data));
    }
  });
};

export const getFriends = (str_user_id) => (dispatch) => {
  profileAPI.getdUserFriends(str_user_id)
  .then((data) => {
    if (data.resultCode === 0) {
      debugger
      dispatch(setUserFriends(data.data));
    }
  });
};

export default profileReduser;
