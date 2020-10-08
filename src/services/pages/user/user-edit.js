export default {
	data: () => ({
		valid: true,
		id: "",
		name: "",
		phone: "",
		address: "",
		dob: "",
		error: "",
		// validation rules for user name.
		nameRules: [
			value => !!value || "The name field is required.",
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
	created(){
		this.id = this.$route.params.data.id;
		this.name = this.$route.params.data.name;
		this.phone = this.$route.params.data.phone;
		this.address = this.$route.params.data.address;
		this.dob = this.$route.params.data.dob;
	},
	methods: {
		cancelUser() {
			this.$router.push({ name: "user-list" });
		},
		showUpdate(id) {
			var request = {
				name: this.name,
				phone: this.phone,
				address: this.address,
				dob: this.dob
			};
			this.$axios
			.put("/update/user/" + id, request)
			.then((response) => {
				this.$router.push({ name: "user-list" });
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}
};
  