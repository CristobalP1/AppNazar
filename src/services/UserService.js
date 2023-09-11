import apiClient from "./api"

const getUsers = () => {
    return apiClient.get('/character')
}

const getUser = (id) => {
    return apiClient.get(`/character/${id}`)
}

const upPhoto = () => {
    return apiClient.post(`users/${id}`)
}

export {getUser,getUsers,upPhoto}