import { mapGetters } from "vuex";
export default {
	data: () => ({
		valid: true,
		title: "",
		description: "",
		error: "",
		// validation rules for post title.
		titleRules: [
			value => !!value || "The title field is required.",
		],
		// validation rules for post description.
		descriptionRules: [value => !!value || "The description field is required."],
		showList: []
	}),
  computed: {
    ...mapGetters(["isLoggedIn"]),
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
        this.$router.push({ name: "post-list" });
    },
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
