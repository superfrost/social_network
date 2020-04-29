import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  //withCredentials: true,
  //headers: {"API-KEY": "12312-1312-1231"}
}) 

export const usersAPI = {
  getUsers(pageSize = 5, currentPage = 1)  {
    return instance.get(`users?pageSize=${pageSize}&currentPage=${currentPage}`)
      .then(response => {
        return response.data
      })
  },
  getUserProfile(user_id) {
    return instance.get(`profile/${user_id}`)
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
  authentificateMe() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}
