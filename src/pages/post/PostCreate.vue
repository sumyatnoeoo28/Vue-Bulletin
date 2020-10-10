<template>
    <v-card class="mx-auto" max-width="344">
        <v-card-title class="login-title">
            <span class="title font-weight-light">Post Create</span>
        </v-card-title>
        <v-form ref="createPost" v-model="valid" @submit.prevent="createPost">
            <v-card-text>
                <div class="login-error">{{error}}</div>
                <div class="login-input">
                    <v-text-field v-model="title" type="text" label="Title" :rules="titleRules" hide-details="auto">
                    </v-text-field>
                </div>
                <div class="login-input">
                    <v-text-field v-model="description" type="text" label="Description" :rules="descriptionRules"
                        hide-details="auto"></v-text-field>
                </div>
            </v-card-text>
            <v-card-actions>
                <div class="login-action">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" :disabled="!valid" large color="primary" class="mr-4">Create</v-btn>
                    <v-btn large color="primary" @click="cancelPost">Cancel</v-btn>
                </div>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script src="../../services/pages/post/post-create.js">
</script>