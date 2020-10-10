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
        editPost: null,
        createUser: null,
        editUser: null
    },
    mutations: {
        /**
         * This is to set user information.
         * @param {object} state state
         * @param {object} userData user information
         */
        setUserData(state, userData) {
            state.user = userData;
        },
        /**
         * This is to set create post data.
         * @param {object} state state
         * @param {object} postData postData (title, description)
         */
        setCreatePost(state, postData) {
            state.createPost = postData;
        },
        /**
         * This is to set edit post data.
         * @param {object} state state
         * @param {object} postData postData (title, description)
         */
        setEditPost(state, postData) {
            state.editPost = postData;
        },
        /**
         * This is to set create user data.
         * @param {object} state state
         * @param {object} userData userData (name, email, phone, address, dob)
         */
        setCreateUser(state, userData) {
            state.createUser = userData;
        },
        /**
        * This is to set edit user data.
        * @param {object} state state
        * @param {object} userData userData (id, name, phone, address, dob)
        */
        setEditUser(state, userData) {
            state.editUser = userData;
        }
    },
    actions: {
        /**
         * This is to login user and save logged in user in vuex store.
         * @param {Function} commit commit function
         * @param {Object} credentials user name and password
         */
        login({ commit }, credentials) {
            return axios.post("/auth/login", credentials).then(({ data }) => {
                commit("setUserData", data);
            });
        },
        /**
         * This is to logout user and reset user in vuex store.
         * @param {Function} param0 commit function
         * @param {Object} credentials credentials
         */
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
        editPost: state => state.editPost,
        createUser: state => state.createUser,
        editUser: state => state.editUser
    },
    plugins: [createPersistedState()],
});
