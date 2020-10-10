export default {
    data: () => ({
        id: "",
        name: "",
        phone: "",
        address: "",
        dob: "",
        error: "",
        valid: true,
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
        ]
    }),
    props: ["data"],
    created() {
        this.id = this.$route.params.data.id;
        this.name = this.$route.params.data.name;
        this.phone = this.$route.params.data.phone;
        this.address = this.$route.params.data.address;
        this.dob = this.$route.params.data.dob;
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
         * This is to set edit user in vuex store and then to route to useredit confirm form.
         * @param {string} editUser editUser (id)
         * @returns void
         */
        editUser(id) {
            const editUser = {
                id: this.id,
                name: this.name,
                phone: this.phone,
                address: this.address,
                dob: this.dob
            };
            this.$store.commit("setEditUser", editUser);
            this.$router.push({ name: 'useredit-confirm', params: { id } });
        }
    }
};
