import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostEdit from "../pages/post/PostEdit";
import PostConfirm from "../pages/post/PostConfirm";
import PostEditConfirm from "../pages/post/PostEditConfirm";
import UserList from "../pages/user/UserList";
import UserProfile from "../pages/user/UserProfile";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";
import UserConfirm from "../pages/user/UserConfirm";
import UserEditConfirm from "../pages/user/UserEditConfirm";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/confirm",
        name: "post-confirm",
        component: PostConfirm,
    },
    {
        path: "/post/edit/:id",
        name: "post-edit",
        component: PostEdit,
    },
    {
        path: "/postedit/confirm",
        name: "postedit-confirm",
        component: PostEditConfirm,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/profile",
        name: "user-profile",
        component: UserProfile,
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/confirm",
        name: "user-confirm",
        component: UserConfirm,
    },
    {
        path: "/user/edit/:id",
        name: "user-edit",
        component: UserEdit,
    },
    {
        path: "/useredit/confirm",
        name: "useredit-confirm",
        component: UserEditConfirm,
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    if (!loggedIn && to.name != "login") {
        return next("/login");
    }
    next();
});

export default router;
