<template>
    <v-card>
        <v-card-title>
            User list
            <v-spacer></v-spacer>
            <v-form ref="postList">
                <v-row class="filter-bar">
                    <v-col md="2.5">
                        <v-text-field label="Search User" hide-details="auto" v-model="searchUser"></v-text-field>
                    </v-col>
                    <v-btn class="post-list-btn mr-4" color="light-blue lighten-5" @click="filterUsers">Filter</v-btn>
                    <v-btn class="post-list-btn mr-4" color="light-blue lighten-5" @click="backPost">
                        <v-icon color="light-blue lighten-3" left>
                            mdi-format-list-bulleted-square
                        </v-icon>PostList
                    </v-btn>
                    <v-btn class="post-list-btn mr-4" color="light-blue lighten-5" @click="addUser">
                        <v-icon color="light-blue lighten-3" left>
                            mdi-plus
                        </v-icon>User
                    </v-btn>
                    <v-btn class="post-list-btn mr-4" color="light-blue lighten-5">Upload</v-btn>
                    <v-btn class="post-list-btn mr-4" color="light-blue lighten-5">Download</v-btn>
                </v-row>
            </v-form>
        </v-card-title>
        <v-container>
            <v-data-table :headers="headers" :items="showList">
                <template v-slot:[`item.name`]="{ item }">
                    <a v-if="item.name"  @click="showDetail(item)">{{item.name}}</a>
                  </template>
                <template v-slot:[`item.created_user`]="{ item }">
                    <p v-if="item.created_user">{{item.created_user}}</p>
                </template>
                <template v-slot:[`item.operation`]="{ item }">
                    <v-row>
                        <div class="operation-btn">
                            <v-btn color="light-blue lighten-5" class="post-list-btn" @click="updateUser(item)">
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
                    <v-card-title class="headline">User Detail</v-card-title>
                    <v-card-text>User ID: {{id}}</v-card-text>
                    <v-card-text>User Name: {{name}}</v-card-text>
                    <v-card-text>User Email: {{email}}</v-card-text>
                    <v-card-text>User Created User: {{created_user}}</v-card-text>
                    <v-card-text>User Phone: {{phone}}</v-card-text>
                    <v-card-text>User Address: {{address}}</v-card-text>
                    <v-card-text>User DOB: {{dob}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="light-blue lighten-5" class="post-list-btn" @click="isDetailDialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="isDeleteDialog" max-width="500">
                <v-card>
                    <v-card-title class="headline">Are you sure delete this User?</v-card-title>
                    <v-card-text>User ID: {{id}}</v-card-text>
                    <v-card-text>User Name: {{name}}</v-card-text>
                    <v-card-text>User Email: {{email}}</v-card-text>
                    <v-card-text>User Created User: {{created_user}}</v-card-text>
                    <v-card-text>User Phone: {{phone}}</v-card-text>
                    <v-card-text>User Address: {{address}}</v-card-text>
                    <v-card-text>User DOB: {{dob}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="light-blue lighten-5" class="post-list-btn" @click="isDeleteDialog = false">Close</v-btn>
                        <v-btn color="deep-orange accent-4" class="post-list-btn" @click="removeUser(id)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-card>
</template>
<script src="../../services/pages/user/user-list.js">
</script>
<style scoped src="../../assets/css/pages/user/user-list.css">
</style>