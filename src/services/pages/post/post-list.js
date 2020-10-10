import { mapGetters } from "vuex";
export default {
    data() {
        return {
            id: "",
            title: "",
            description: "",
            created_user: "",
            search: "",
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "created_user",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            userList: []
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
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
         * This is to get post list include created_user.
         * @returns post list
         */
        postedUserList() {
            return this.postList.map(posts => {
                var postList = this.userList.find(user => {
                    return posts.created_user_id == user.id;
                });
                posts["created_user"] = postList.name;
                return posts;
            });
        }
    },
    beforeMount() {
        this.getUser();
        this.getPost();
    },
    methods: {
        /**
         * This is to route to post create form.
         * @returns void
         */
        addPost() {
            this.$router.push({ name: "post-create" });
        },
        /**
         * This is to route to user list form.
         * @returns void
         */
        showUser() {
            this.$router.push({ name: "user-list" });
        },
        /**
         * This is to filter posts of datatable for particular post search.
         * @returns void
         */
        filterPosts() {
            var result = this.postList.filter(post => {
                return (
                    post['title'].toLowerCase().includes(this.search.toLowerCase()) ||
                    post['description'].toLowerCase().includes(this.search.toLowerCase()) ||
                    post['created_user'].toLowerCase().includes(this.search.toLowerCase())
                );
            });
            this.showList = result;
        },
        /**
         * This is to get user list.
         * @returns void
         */
        async getUser() {
            await this.$axios
                .get("/user/list")
                .then((response) => {
                    this.userList = response.data.user_list;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to get post list.
         * @returns void
         */
        async getPost() {
            await this.$axios
                .get("/post/list")
                .then((response) => {
                    this.postList = response.data.post_list;
                    var result = this.postList.filter(post => {
                        return (
                            !post['deleted_user_id']
                        );
                    });
                    this.postList = result;
                    this.showList = this.postedUserList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to set post item and then to route to post edit form.
         * @param {object} item item (id, title, description)
         * @returns void
         */
        updatePost(item) {
            var id = item.id;
            this.$router.push({ name: 'post-edit', params: { data: item, id } });
        },
        /**
         * This is to set post item for delete confirm dialog.
         * @param {object} item item (id, title, description, created_user)
         * @returns void
         */
        deleteConfirm(item) {
            this.isDeleteDialog = true;
            this.id = item.id;
            this.title = item.title;
            this.description = item.description;
            this.created_user = item.created_user;
        },
        /**
         * This is to remove post item.
         * @param {string} item item (id)
         * @returns void
         */
        removePost(id) {
            this.isDeleteDialog = false;
            this.$axios
                .delete("/delete/post/" + id)
                .then((response) => {
                    console.log(response);
                    this.getPost();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};


