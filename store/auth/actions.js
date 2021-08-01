export default {
    setUsername({ commit }, username) {
        localStorage.setItem('username', username);
        commit('setUsername', username);
    },
    setAuthToken({ commit }, authToken) {
        localStorage.setItem('authToken', authToken);
        commit('setAuthToken', authToken);
    }
}