import * as axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "00c6f00b-4fcb-41a9-bbcc-7704127acd93",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    authMe() {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfile(profileId) {
        return axiosInstance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return axiosInstance.post(
            `follow/${userId}`,
            {},
        )
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(userId) {
        return axiosInstance.delete(
            `follow/${userId}`,
            {},
        )
            .then(response => {
                return response.data;
            })
    }
}