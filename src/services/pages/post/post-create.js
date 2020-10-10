import { mapGetters } from "vuex";
export default {
    data: () => ({
        title: "",
        description: "",
        error: "",
        valid: true,
        // validation rules for post title.
        titleRules: [
            value => !!value || "The title field is required.",
        ],
        // validation rules for post description.
        descriptionRules: [value => !!value || "The description field is required."]
    }),
    computed: {
        ...mapGetters(["isLoggedIn"])
    },
    methods: {
        /**
         * This is to route to post list form.
         * @returns void
         */
        cancelPost() {
            this.$router.push({ name: "post-list" });
        },
        /**
         * This is to set create post in vuex store and then to route to post confirm form.
         * @returns void
         */
        createPost() {
            const postList = {
                title: this.title,
                description: this.description
            };
            this.$store.commit("setCreatePost", postList);
            this.$router.push({ name: "post-confirm" });
        }
    },
};
