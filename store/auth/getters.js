export default {
    getUserId: store => {
        return store.id
    },
    getUsername: store => {
        return store.username
    },

    getAuthToken: store => {
        return store.authToken
    }
}