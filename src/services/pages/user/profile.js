export default {
    data: () => ({
        id: "",
        name: "",
        email: "",
        profile_path: "",
        phone: "",
        address: "",
        dob: "",
        error: "",
        valid: true,
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
    props: ["data"],
    created() {
        this.id = this.$route.params.data;
    },
    beforeMount() {
        this.getUser();
        this.getUserProfile(this.id);
    },
    methods: {
        /**
         * This is to route to user list form.
         * @returns void
         */
        cancelUser() {
            this.$router.push({ name: "user-list" });
        },
        /**
         * This is to get user list.
         * @returns user list
         */
        getUser() {
            this.$axios
                .get("/user/list")
                .then((response) => {
                    this.userList = response.data.user_list;
                    this.showList = this.userList.find(user => {
                        return user.id === this.$route.params.data;
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getUserProfile(id) {
            console.log(id);
            this.$axios
            .get("/get/avator/" + id)
            .then((response) => {
                this.profile_path = response.data;
               console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
};

