import { mapGetters } from "vuex";
export default {
    data: () => ({
        title: "",
        description: "",
        error: ""
    }),
    computed: {
        ...mapGetters(["createPost"])
    },
    methods: {
        /**
         * This is to route to post create form.
         * @returns void
         */
        cancelPost() {
            this.$router.push({ name: "post-create" });
        },
        /**
         * This is to set create post data from post confirm form and then to route to post list form.
         * @param {object} createPost createPost (title, description)
         * @returns void
         */
        confirmPost(createPost) {
            this.$axios
                .post("/create/post", createPost)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: "post-list" });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
