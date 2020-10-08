<template>
	<v-container>
		<h2>Create User Confirmation</h2>
		<v-form v-on:submit.prevent="confirmUser(createUser)">
			<v-container>
				<v-row>
					<v-col cols="4">
						<v-subheader>User Name</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.name }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>Description</v-subheader>
						<!-- <v-text-field v-model="description" name="description" v-show="disiable"></v-text-field> -->
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.email }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>Email</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.email }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>Phone</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.phone }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>Address</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.address }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>DOB</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createUser.dob }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" class="text-center">
							<v-btn type="submit" large color="primary" class="mr-4">Create</v-btn>
					<v-btn large color="primary" @click="cancelUser">Cancel</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</v-container>
</template>
<script src="../../services/pages/user/user-confirm.js">
</script>