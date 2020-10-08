<template>
	<v-card class="mx-auto" max-width="344">
		<v-card-title class="login-title">
			<span class="title font-weight-light">User Profile</span>
		</v-card-title>
		<v-form ref="form" v-model="valid">
			<v-card-text>
				<div class="login-error">{{error}}</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.name"
						type="text"
						label="User Name"
						:rules="nameRules"
						hide-details="auto"
					></v-text-field>
				</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.email"
						type="text"
						label="Email"
						:rules="emailRules"
						hide-details="auto"
					></v-text-field>
				</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.profile_path"
						type="text"
						label="Profile Path"
						:rules="profilepathRules"
						hide-details="auto"
					></v-text-field>
				</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.phone"
						type="text"
						label="Phone"
						:rules="phoneRules"
						hide-details="auto"
					></v-text-field>
				</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.address"
						type="text"
						label="Address"
						:rules="addressRules"
						hide-details="auto"
					></v-text-field>
				</div>
				<div class="login-input">
					<v-text-field
						v-model="showList.dob"
						type="text"
						label="DOB"
						:rules="dobRules"
						hide-details="auto"
					></v-text-field>
				</div>
			</v-card-text>
			<v-card-actions>
				<div class="login-action">
					<v-spacer></v-spacer>
					<v-btn type="submit" :disabled="!valid" large color="primary" class="mr-4" @click="updateProfile()">Update</v-btn>
					<v-btn large color="primary" @click="cancelUser">Cancel</v-btn>
				</div>
			</v-card-actions>
		</v-form>
	</v-card>
</template>
<script src="../../services/pages/user/profile.js">
</script>