import { mapGetters } from "vuex";
export default {
    data: () => ({
        title: "",
        description: "",
        error: ""
    }),
    computed: {
        ...mapGetters(["editPost"])
    },
    methods: {
        /**
         * This is to route to post edit form.
         * * @param {object} editPost editPost (title, description)
         * @returns void
         */
        cancelEditPost(editPost) {
            this.$router.push({ name: 'post-edit', params: { data: editPost } });
        },
        /**
         * This is to set post user data from postedit confirm form and then to route to post list form.
         * @param {object} editPost editPost (id, title, description)
         * @returns void
         */
        confirmEditPost(editPost) {
            var id = editPost.id;
            this.$axios
                .put("/update/post/" + id, editPost)
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
