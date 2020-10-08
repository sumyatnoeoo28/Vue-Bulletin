export default {
	data: () => ({
		valid: true,
		id: "",
		name: "",
		email: "",
		profile_path: "",
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
		userList: [],
		showList: []
	}),
	props : ["data"],
	beforeMount() {
		this.getUser();
	},
	created() {
		console.log(this.$route.params.data);
	},
	methods: {
		cancelUser() {
			this.$router.push({ name: "user-list" });
		},
		getUser() {
			this.$axios
			.get("/user/list")
			.then((response) => {
				this.userList  = response.data.user_list;
				this.showList = this.userList.find(user=> {
					return  user.id === this.$route.params.data;
				});
			})
			.catch((err) => {
				console.log(err);
			});
		},
		updateProfile() {
			var request = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				address: this.address,
				dob: this.dob
				};
			this.showList = request;
			console.log(this.showList);
		}
	}
};
 
    