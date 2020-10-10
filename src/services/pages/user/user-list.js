import { mapGetters } from "vuex";
export default {
    data() {
        return {
            id: "",
            name: "",
            email: "",
            created_user: "",
            phone: "",
            address: "",
            dob: "",
            searchUser: "",
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    value: "created_user",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "DOB",
                    value: "dob",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            userList: [],
            showList: []
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userId", "userName"]),
        /**
        * This is to get header list.
        * @returns header list
        */
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
        /**
         * This is to get user list include created_user.
         * @returns user list
         */
        createdUserList() {
            return this.userList.map(users => {
                var userList = this.userList.find(user => {
                    return users.created_user_id == user.id;
                });
                users["created_user"] = userList.name;
                return users;
            });
        }
    },
    beforeMount() {
        this.getUser();
    },
    methods: {
        /**
         * This is to route to user create form.
         * @returns void
         */
        addUser() {
            this.$router.push({ name: "user-create" });
        },
        /**
         * This is to route to post list form.
         * @returns void
         */
        backPost() {
            this.$router.push({ name: "post-list" });
        },
        /**
         * This is to filter users of datatable for particular user search.
         * @returns void
         */
        filterUsers() {
            var result = this.userList.filter(user => {
                return (
                    user['name'].toLowerCase().includes(this.searchUser.toLowerCase()) ||
                    user['email'].toLowerCase().includes(this.searchUser.toLowerCase()) ||
                    user['created_user'].toLowerCase().includes(this.searchUser.toLowerCase()) ||
                    user['phone'].toLowerCase().includes(this.searchUser.toLowerCase()) ||
                    user['address'].toLowerCase().includes(this.searchUser.toLowerCase()) ||
                    user['dob'].toLowerCase().includes(this.searchUser.toLowerCase())
                );
            });
            this.showList = result;
        },
        /**
         * This is to get user list.
         * @returns void
         */
        getUser() {
            this.$axios
                .get("/user/list")
                .then((response) => {
                    this.userList = response.data.user_list;
                    var result = this.userList.filter(user => {
                        return (
                            !user['deleted_user_id']
                        );
                    });
                    this.userList = result;
                    this.showList = this.createdUserList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to set user item and then to route to user edit form.
         * @param {object} item item (id, name, email, created_user, phone, address, dob)
         * @returns void
         */
        updateUser(item) {
            var id = item.id;
            this.$router.push({ name: 'user-edit', params: { data: item, id } });
        },
        /**
         * This is to set user item for delete confirm dialog.
         * @param {object} item item (id, name, email, created_user, phone, address, dob)
         * @returns void
         */
        deleteConfirm(item) {
            this.isDeleteDialog = true;
            this.id = item.id;
            this.name = item.name;
            this.email = item.email;
            this.created_user = item.created_user;
            this.phone = item.phone;
            this.address = item.address;
            this.dob = item.dob;
        },
        /**
         * This is to remove user item.
         * @param {string} item item (id)
         * @returns void
         */
        removeUser(id) {
            this.isDeleteDialog = false;
            this.$axios
                .delete("/delete/user/" + id)
                .then((response) => {
                    console.log(response);
                    this.getUser();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};