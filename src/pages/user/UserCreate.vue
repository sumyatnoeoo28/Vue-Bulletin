<template>
    <v-card class="mx-auto" max-width="344">
        <v-card-title class="login-title">
            <span class="title font-weight-light">User Create</span>
        </v-card-title>
        <v-form ref="createUser" v-model="valid" @submit.prevent="createUser">
            <v-card-text>
                <div class="login-error">{{error}}</div>
                <div class="login-input">
                    <v-text-field v-model="name" type="text" label="User Name" :rules="nameRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="email" type="email" label="Email" :rules="emailRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="password" type="password" label="Password" :rules="pwdRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="confirm_password" type="password" label="Confirm Password" :rules="confirmpwRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="phone" type="text" label="Phone" :rules="phoneRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="address" type="text" label="Address" :rules="addressRules"
                        hide-details="auto"></v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="dob" type="date" label="DOB" :rules="dobRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-file-input
                    type="file"
                    :rules="profileRules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                    v-model="profile_path"
                    v-on:change="saveProfilePicture(profile_path)"
                  >
                  </v-file-input>
                  <img id="output" width="100" heigth="100"/>
                </div>
            </v-card-text>
            <v-card-actions>
                <div class="login-action">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" large color="light-blue lighten-5" class="mr-4">Create</v-btn>
                    <v-btn large color="deep-orange accent-4" @click="cancelUser">Cancel</v-btn>
                </div>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script src="../../services/pages/user/user-create.js">
</script>