import * as axios from "axios";
import { KEY } from "../env/env";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  //withCredentials: true,
  //headers: {"API-KEY": "12312-1312-1231"}
  //headers: {"Authorization": `Bearer ${""}`}
}) 

//? axios.defaults.headers.common['Authorization'] = `Bearer ${KEY}`

//? const axiosInstance = axios.create()
//? axiosInstance.defaults.headers['Authorization'] = `Bearer ${KEY}` 

export const setHeaders = (token = null) => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`
}

export const usersAPI = {
  getUsers(pageSize = 5, currentPage = 1)  {
    return instance.get(`users?pageSize=${pageSize}&currentPage=${currentPage}`)
      .then(response => {
        return response.data
      })
  },
  getUserProfile(user_id) {
    console.warn("Deprecated method. Please use profileAPI")
    return profileAPI.getUserProfile(user_id)
  },
}

export const profileAPI = {
  getUserProfile(user_id) {
    return instance.get(`profile/${user_id}`)
    .then(response => {
      return response.data
    })
  },
  getStatus(user_id) {
    return instance.get(`status/${user_id}`)
    .then(response => {
      return response.data
    })
  },
  updateStatus(status) {
    return instance.put(`status`, {status: status})
    .then(response => {
      return response.data
    })
  },
}

export const followAPI = {
  unFollowUser(user_id) {
    return instance.delete(`unfollow/${user_id}`)
      .then(response => {
        return response.data
      })
  },
  followUser(user_id) {
    return instance.post(`follow/${user_id}`)
      .then(response => {
        return response.data
      })
  }
}

export const authentificateAPI = {
  authentificateMe(token) {
    let tokennn = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : token
    setHeaders(tokennn)
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  loginUser(login, password, rememberMe = false) {
    return instance.post(`login?login=${login}&password=${password}&rememberMe=${rememberMe}`)
      .then(response => {
        return response.data
      })
  },
  logOut() {
    localStorage.removeItem("access_token")
    return instance.delete(`logout`)
      .then(response => {
        setHeaders()
        return response.data
      })
  }
}

export const loginAPI = {
  loginUser(login, password, rememberMe = false) {
    console.warn("Deprecated method. For Login please use authentificateAPI.loginUser")
    return authentificateAPI.loginUser(login, password, rememberMe)
  },
  logOut() {
    console.warn("Deprecated method. For logout please use authentificateAPI.logOut")
    return authentificateAPI.logOut()
  }
}


