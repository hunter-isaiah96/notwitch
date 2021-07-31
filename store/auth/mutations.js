export default {
    setUsername(state, username) {
        localStorage.setItem('username', username)
        state.username = username
    },
    setAuthToken(state, token) {
        localStorage.setItem('authToken', token)
        state.authToken = token
    }
}