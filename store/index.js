import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        navigationDrawer: true
    },
    getters: {
        navigationDrawer(state) {
            return state.navigationDrawer;
        }
    },
    actions: {
        setNavigationDrawer({ commit }, value) {
            commit('setNavigationDrawer', value);
        },
    },
    mutations: {
        setNavigationDrawer(state, value) {
            state.navigationDrawer = value;
        }
    },
    modules: {
        auth: auth
    }
});