import { mapGetters } from "vuex";
export default {
	data: () => ({
		valid: true,
		title: '',
		description: '',
		error: ""
	}),
  computed: {
    ...mapGetters(["createPost"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  methods: {
    cancelPost() {
			this.$router.push({ name: "post-create" });
    },
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
