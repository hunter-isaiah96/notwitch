export default {
    setUserId(state, id) {
        localStorage.setItem('user_id', id)
        state.id = id
    },
    setUsername(state, username) {
        localStorage.setItem('username', username)
        state.username = username
    },
    setAuthToken(state, token) {
        localStorage.setItem('authToken', token)
        state.authToken = token
    }
}