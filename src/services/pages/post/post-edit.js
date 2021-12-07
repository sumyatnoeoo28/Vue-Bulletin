import { mapGetters } from "vuex";
export default {
    data: () => ({
        id: "",
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
    props: ["data"],
    computed: {
        ...mapGetters(["isLoggedIn"])
    },
    created() {
        /**
         * This is to get edit post in vuex store and then to route to postedit confirm form.
         * @returns void
         */
        this.id = this.$route.params.data.id;
        this.title = this.$route.params.data.title;
        this.description = this.$route.params.data.description;
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
         * This is to set edit post in vuex store and then to route to postedit confirm form.
         * @param {string} editPost editPost (id)
         * @returns void
         */
        editPost(id) {
            const editPost = {
                id: this.id,
                title: this.title,
                description: this.description
            };
            this.$store.commit("setEditPost", editPost);
            this.$router.push({ name: 'postedit-confirm', params: { id } });
        }
    }
};
