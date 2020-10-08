import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
  state: {
    user: null,
    createPost: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setCreatePost(state, postData) {
      state.createPost = postData;
    },
    setCreateUser(state, userData) {
        state.createUser = userData;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    logout({ commit }, credentials) {
      return axios.post("/auth/logout", credentials).then(() => {
        commit("setUserData", null);
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => {
        if (state.user && state.user.name) {
        return state.user.name;
        }
    },
    userId: (state) => {
        if (state.user && state.user.id) {
          return state.user.id;
        }
    },
    createPost: state => state.createPost,
    createUser: state => state.createUser
  },
  plugins: [createPersistedState()],
});
