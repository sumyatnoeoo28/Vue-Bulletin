<template>
    <v-card class="mx-auto" max-width="344">
        <v-card-title class="login-title">
            <span class="title font-weight-light">User Edit</span>
        </v-card-title>
        <v-form ref="editUser" v-model="valid" @submit.prevent="editUser(id)">
            <v-card-text>
                <div class="login-error">{{error}}</div>
                <div class="login-input">
                    <v-text-field v-model="name" type="text" label="User Name" :rules="nameRules" hide-details="auto">
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
            </v-card-text>
            <v-card-actions>
                <div class="login-action">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" :disabled="!valid" large color="primary" class="mr-4">Update</v-btn>
                    <v-btn large color="primary" @click="cancelUser">Cancel</v-btn>
                </div>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script src="../../services/pages/user/user-edit.js">
</script>