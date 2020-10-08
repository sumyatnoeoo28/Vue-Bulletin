import { mapGetters } from "vuex";
export default {
	data: () => ({
		valid: true,
		id: '',
		title: '',
		description: '',
		error: "",
		// validation rules for post title.
		titleRules: [
			value => !!value || "The title field is required.",
		],
		// validation rules for post description.
		descriptionRules: [value => !!value || "The description field is required."],
		postList: [],
		showList: []
	}),
  props : ["data"],
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
  created(){
		this.id = this.$route.params.data.id;
		this.title = this.$route.params.data.title;
		this.description = this.$route.params.data.description;
		// console.log(this.$route.params.data);
  },
  methods: {
    cancelPost() {
			this.$router.push({ name: "post-list" });
    },
    showUpdate(id) {
			var request = {
				title: this.title,
				description: this.description
				};
			this.$axios
			.put("/update/post/" + id, request)
			.then((response) => {
				this.$router.push({ name: 'post-confirm', params: { data: response } });
			})
			.catch((err) => {
				console.log(err);
			});
    }
  }
};

