import { usersAPI, followAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 11,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  fake: 10,
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case "FAKE": return {...state, fake: state.fake + 1}
    case FOLLOW: {
      return  {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    };
    case UNFOLLOW: {
      return  {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    };
    case SET_USERS: {
      return  {
        ...state,
        users: [...action.users ]
      }
    };
    case SET_CURRENT_PAGE: {
      return  {
        ...state, 
        currentPage: action.currentPage,
      }
    };
    case SET_TOTAL_USERS_COUNT: {
      return  {
        ...state, 
        totalUsersCount: action.totalUsersCount,
      }
    };
    case TOGGLE_IS_FETCHING: {
      return  {
        ...state, 
        isFetching: action.toggleState,
      }
    };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return  {
        ...state, 
        followingInProgress: action.toggleState 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId)
      }
    };
    default:
      return state
  };
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setToggleIsFetching = (toggleState) => ({type: TOGGLE_IS_FETCHING, toggleState});
export const setToggleIsFollowingProgress = (toggleState, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, toggleState, userId});

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true))
      
    usersAPI.getUsers(pageSize, currentPage)
      .then((data) => {
        dispatch(setToggleIsFetching(false))
        dispatch(setUsers(data.users))
        dispatch(setTotalUsersCount(data.totalUsersCount))
      });
  }
}

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(setToggleIsFollowingProgress(true, userId))
    followAPI.unFollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollowSuccess(userId))
        }
        dispatch(setToggleIsFollowingProgress(false, userId))
      })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setToggleIsFollowingProgress(true, userId))
    followAPI.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(setToggleIsFollowingProgress(false, userId))
      })
  }
}
export default userReduser;