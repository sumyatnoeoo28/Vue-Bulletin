<template>
    <v-container>
        <h2>Edit Post Confirmation</h2>
        <v-form v-on:submit.prevent="confirmEditPost(editPost)">
            <v-container>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>Title</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editPost.title }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-subheader>Description</v-subheader>
                    </v-col>
                    <v-col cols="8">
                        <v-subheader>{{ editPost.description }}</v-subheader>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn type="submit" large color="light-blue lighten-5" class="mr-4">Update</v-btn>
                        <v-btn large color="deep-orange accent-4" @click="cancelEditPost(editPost)">Cancel</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>
<script src="../../services/pages/post/postedit-confirm.js">
</script>