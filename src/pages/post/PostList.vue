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
                    <v-btn class="post-list-btn mr-4"  color="light-blue lighten-5" @click="filterPosts">Filter</v-btn>
                    <v-btn class="post-list-btn mr-4"  color="light-blue lighten-5" @click="addPost">
                        <v-icon color="light-blue lighten-3" left>
                            mdi-plus
                        </v-icon>Post
                    </v-btn>
                    <v-btn class="post-list-btn mr-4"  color="light-blue lighten-5" @click="showUser">
                        <v-icon color="light-blue lighten-3" left>
                            mdi-format-list-bulleted-square
                        </v-icon>UserList
                    </v-btn>
                    <v-btn class="post-list-btn mr-4"  color="light-blue lighten-5">Upload</v-btn>
                    <v-btn class="post-list-btn mr-4"  color="light-blue lighten-5">Download</v-btn>
                </v-row>
            </v-form>
        </v-card-title>
        <v-container>
            <v-data-table :headers="headers" :items="showList">
                <template v-slot:[`item.title`]="{ item }">
                    <a v-if="item.title"  @click="showDetail(item)">{{item.title}}</a>
                  </template>
                <template v-slot:[`item.created_user`]="{ item }">
                    <p v-if="item.created_user">{{item.created_user}}</p>
                </template>
                <template v-slot:[`item.operation`]="{ item }">
                    <v-row>
                        <div class="operation-btn">
                            <v-btn  color="light-blue lighten-5" class="post-list-btn mr-4" @click="updatePost(item)">
                                <v-icon color="light-blue lighten-3" left>
                                    mdi-pencil
                                </v-icon>Edit
                            </v-btn>
                        </div>
                        <div class="operation-btn">
                            <v-btn color="deep-orange accent-4" class="post-list-btn" @click="deleteConfirm(item)">Delete</v-btn>
                        </div>
                    </v-row>
                </template>
            </v-data-table>
            <v-dialog v-model="isDetailDialog" max-width="500">
                <v-card>
                    <v-card-title class="headline">Post Detail</v-card-title>
                    <v-card-text>Post ID: {{id}}</v-card-text>
                    <v-card-text>Post Title: {{title}}</v-card-text>
                    <v-card-text>Post Description: {{description}}</v-card-text>
                    <v-card-text>Posted User: {{created_user}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="light-blue lighten-5" class="post-list-btn" @click="isDetailDialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="isDeleteDialog" max-width="500">
                <v-card>
                    <v-card-title class="headline">Are you sure delete this post?</v-card-title>
                    <v-card-text>Post ID: {{id}}</v-card-text>
                    <v-card-text>Post Title: {{title}}</v-card-text>
                    <v-card-text>Post Description: {{description}}</v-card-text>
                    <v-card-text>Posted User: {{created_user}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  color="light-blue lighten-5" class="post-list-btn" @click="isDeleteDialog = false">Close</v-btn>
                        <v-btn  color="deep-orange accent-4" class="post-list-btn" @click="removePost(id)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-card>
</template>
<script src="../../services/pages/post/post-list.js">
</script>
<style scoped src="../../assets/css/pages/post/post-list.css">
</style>