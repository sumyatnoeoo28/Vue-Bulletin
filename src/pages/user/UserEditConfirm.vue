<template>
    <v-container>
        <h2>Edit User Confirmation</h2>
        <v-form v-on:submit.prevent="confirmEditUser(editUser)">
            <v-container>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>User Name</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editUser.name }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>Phone</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editUser.phone }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>Address</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editUser.address }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>DOB</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editUser.dob }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn type="submit" large color="light-blue lighten-5" class="mr-4">Update</v-btn>
                        <v-btn large color="deep-orange accent-4" @click="cancelEditUser(editUser)">Cancel</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>
<script src="../../services/pages/user/useredit-confirm.js">
</script>