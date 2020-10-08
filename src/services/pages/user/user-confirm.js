import { mapGetters } from "vuex";
export default {
	data: () => ({
		disiable: false,
		valid: true,
		name: "",
		email: "",
		phone: "",
		address: "",
		dob: "",
		error: "",
		postList: [],
		showList: []
	}),
  computed: {
    ...mapGetters(["createUser"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  methods: {
    cancelUser() {
			this.$router.push({ name: "user-create" });
    },
    confirmUser(createUser) {
			this.$axios
			.post("/create/user", createUser)
			.then((response) => {
				console.log(response);
				this.$router.push({ name: "user-list" });
			})
			.catch((err) => {
				console.log(err);
			});
    }
  }
};