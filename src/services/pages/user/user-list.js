import { mapGetters } from "vuex";
export default {
  data() {
    return {
			searchUser: "",
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
			// {
			//     text: "Profile Path",
			//     value: "profile_path",
			// },
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
			userList: [],
			showList: [],
			postList: [],
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "userId", "userName"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
    createdUserList() {
			return this.userList.map(users=> {
				var userList = this.userList.find(user=> {
					return users.created_user_id  ==  user.id;
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
    addUser() {
			this.$router.push({ name: "user-create" });
    },
    backPost() {
			this.$router.push({ name: "post-list" });
    },
    filterUsers() {
			var result = this.userList.filter(user=> {
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
    getUser() {
			this.$axios
			.get("/user/list")
			.then((response) => {
				this.userList = response.data.user_list;
				this.showList = this.createdUserList;
			})
			.catch((err) => {
				console.log(err);
			});
    },
    updateUser(item) {
			var id = item.id;
			this.$router.push({ name: 'user-edit', params: { data: item, id } });
    },
    removeUser(id) {
			this.$axios
			.delete("/delete/user/" + id)
			.then((response) => {
				console.log(response.data.message);
			})
			.catch((err) => {
				console.log(err);
			});
    }
  },
};