import { mapGetters } from "vuex";
export default {
	data: () => ({
		valid: true,
		name: "",
		email: "",
		// profile_path: "",
		phone: "",
		address: "",
		dob: "",
		error: "",
		// validation rules for user name.
		nameRules: [
				value => !!value || "The name field is required.",
		],
		// validation rules for user email.
		emailRules: [
				value => !!value || "The email field is required.",
				value => /.+@.+\..+/.test(value) || "E-mail must be valid."
		],
		// validation rules for user profile-path.
		profilepathRules: [
				value => !!value || "The profile-path field is required.",
		],
				// validation rules for user phone.
		phoneRules: [
				value => !!value || "The phone field is required.",
		],
		// validation rules for user address.
		addressRules: [
				value => !!value || "The address field is required.",
		],
		// validation rules for user dob.
		dobRules: [
				value => !!value || "The dob field is required.",
		],
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
    cancelUser() {
			this.$router.push({ name: "user-list" });
    },
    createUser() {
			const userList = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				address: this.address,
				dob: this.dob
			};
			this.$store.commit("setCreateUser", userList);
			this.$router.push({ name: "user-confirm" });
    }
  },
};
