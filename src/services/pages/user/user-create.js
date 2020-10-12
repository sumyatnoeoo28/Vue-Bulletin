import { mapGetters } from "vuex";
export default {
    data: () => ({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
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
            value => /.+@.+\..+/.test(value) || "E-mail must be valid."
        ],
        // validation rules for password.
        pwdRules: [
            value => !!value || "The password field is required.",
            value => value.length >= 8 || "Please Fill at least 8 characters."
        ],
        // validation rules for confirm password.
        confirmpwRules: [
            value => !!value || "The confirm password field is required.",
            value => value.length >= 8 || "Please Fill at least 8 characters.",
            value => value.password != value.confirm_password || "Password must match."
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
        ]
    }),
    computed: {
        ...mapGetters(["isLoggedIn"])
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
         * This is to set create user in vuex store and then to route to user confirm form.
         * @returns void
         */
        createUser() {
            const userList = {
                name: this.name,
                email: this.email,
                password: this.password,
                phone: this.phone,
                address: this.address,
                dob: this.dob
            };
            this.$store.commit("setCreateUser", userList);
            this.$router.push({ name: "user-confirm" });
        }
    },
};