import { mapGetters } from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
            userList: []
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userId", "userName"]),
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to route user profile form.
         * @param {object} userId userId (id)
         * @returns void
         */
        showProfile(userId) {
            var id = userId;
            this.$router.push({ name: 'user-profile', params: { data: id } });
        }
    },
};