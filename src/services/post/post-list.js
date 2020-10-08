import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      postInfo: null,
      dialogTitle: "",
      dialog: false,
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
    headers() {
        if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
        } else {
        return this.headerList;
        }
    },
    postedUserList() {
        return this.postList.map(posts=> {
            var postList = this.userList.find(user=> {
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
    addPost() {
			this.$router.push({ name: "post-create" });
    },
    showUser() {
			this.$router.push({ name: "user-list" });
    },
    filterPosts() {
			var result = this.postList.filter(post=> {
				return (
					post['title'].toLowerCase().includes(this.search.toLowerCase()) ||
					post['description'].toLowerCase().includes(this.search.toLowerCase()) ||
					post['created_user'].toLowerCase().includes(this.search.toLowerCase())
				);
			});
			this.showList = result;
		},
    async getUser() {
			await this.$axios
			.get("/user/list")
			.then((response) => {
				this.userList  = response.data.user_list;
			})
			.catch((err) => {
				console.log(err);
			});
    },
    async getPost() {
			await this.$axios
			.get("/post/list")
			.then((response) => {
				this.postList = response.data.post_list;
				this.showList = this.postedUserList;
			})
			.catch((err) => {
				console.log(err);
			});
    },
    updatePost(item) {
			var id = item.id;
			this.$router.push({ name: 'post-edit', params: { data: item, id } });
    },
    removePost(id) {
			this.$axios
			.delete("/delete/post/" + id)
			.then((response) => {
				console.log(response.data.message);
			})
			.catch((err) => {
				console.log(err);
			});
    }
  },
};


