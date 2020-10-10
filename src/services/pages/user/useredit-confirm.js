import { mapGetters } from "vuex";
export default {
    data: () => ({
        name: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        error: "",
    }),
    computed: {
        ...mapGetters(["editUser"])
    },
    methods: {
        /**
         * This is to route to user edit form.
         * * @param {object} editUser editUser (name, phone, address, dob)
         * @returns void
         */
        cancelEditUser(editUser) {
            this.$router.push({ name: 'user-edit', params: { data: editUser } });
        },
        /**
         * This is to set edit user data from useredit confirm form and then to route to user list form.
         * @param {object} editUser editUser (id, name, phone, address, dob)
         * @returns void
         */
        confirmEditUser(editUser) {
            var id = editUser.id;
            this.$axios
                .put("/update/user/" + id, editUser)
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