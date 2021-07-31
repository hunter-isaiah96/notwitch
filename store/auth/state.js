export default {
    id: JSON.parse(localStorage.getItem('user_id')),
    username: JSON.parse(localStorage.getItem('username')),
    authToken: JSON.parse(localStorage.getItem('authToken'))
}