import { mapGetters } from "vuex";
export default {
    data: () => ({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        dob: "",
        profile_path: [],
        error: ""
    }),
    props: ["data"],
    created() {
        this.profile_path = this.$route.params.data;
        // if (this.profile_path) {
        //     console.log(this.profile_path);
        //     var reader = new FileReader();
            
        //     reader.onload = function(e) {
        //         var preview = document.getElementById('preview');
        //         preview.src = e.target.result;
        //     }
            
        //     reader.readAsDataURL(this.profile_path); // convert to base64 string
        //   }
    },
    computed: {
        ...mapGetters(["createUser"])
    },
    methods: {
        /**
         * This is to route to user create form.
         * @returns void
         */
        cancelUser() {
            this.$router.push({ name: "user-create" });
        },
        /**
         * This is to set create user data from user confirm form and then to route to user list form.
         * @param {object} createUser createUser (name, email, phone, address, dob)
         * @returns void
         */
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