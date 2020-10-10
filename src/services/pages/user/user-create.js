import { mapGetters } from "vuex";
export default {
    data: () => ({
        name: "",
        email: "",
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
                phone: this.phone,
                address: this.address,
                dob: this.dob
            };
            this.$store.commit("setCreateUser", userList);
            this.$router.push({ name: "user-confirm" });
        }
    },
};