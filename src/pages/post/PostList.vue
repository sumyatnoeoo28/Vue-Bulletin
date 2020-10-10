<template>
    <v-card>
        <v-card-title>
            Post list
            <v-spacer></v-spacer>
            <v-form ref="postList">
                <v-row class="filter-bar">
                    <v-col md="2.5">
                        <v-text-field label="Search Post" hide-details="auto" v-model="search"></v-text-field>
                    </v-col>
                    <v-btn class="post-list-btn mr-4" color="primary" @click="filterPosts">Filter</v-btn>
                    <v-btn class="post-list-btn mr-4" color="primary" @click="addPost">Post++</v-btn>
                    <v-btn class="post-list-btn mr-4" color="primary" @click="showUser">UserList</v-btn>
                    <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
                    <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
                </v-row>
            </v-form>
        </v-card-title>
        <v-container>
            <v-data-table :headers="headers" :items="showList">
                <template v-slot:[`item.created_user`]="{ item }">
                    <p v-if="item.created_user">{{item.created_user}}</p>
                </template>
                <template v-slot:[`item.operation`]="{ item }">
                    <v-row>
                        <div class="operation-btn">
                            <v-btn color="primary" class="post-list-btn mr-4" @click="updatePost(item)">Edit</v-btn>
                        </div>
                        <div class="operation-btn">
                            <v-btn color="error" class="post-list-btn" @click="deleteConfirm(item)">Delete</v-btn>
                        </div>
                    </v-row>
                </template>
            </v-data-table>
            <v-dialog v-model="isDeleteDialog" max-width="500">
                <v-card>
                    <v-card-title class="headline">Are you sure delete this post?</v-card-title>
                    <v-card-text>Post ID: {{id}}</v-card-text>
                    <v-card-text>Post Title: {{title}}</v-card-text>
                    <v-card-text>Post Description: {{description}}</v-card-text>
                    <v-card-text>Posted User: {{created_user}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" class="post-list-btn" @click="isDeleteDialog = false">Close</v-btn>
                        <v-btn color="error" class="post-list-btn" @click="removePost(id)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-card>
</template>
<script src="../../services/pages/post/post-list.js">
</script>