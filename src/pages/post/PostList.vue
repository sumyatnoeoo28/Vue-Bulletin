<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field label="Search Post" hide-details="auto" v-model="search"></v-text-field>
          </v-col>
          <v-btn
            class="post-list-btn mr-4"
            color="primary" @click="filterPosts"
          >Filter</v-btn>
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
                <v-btn color="primary" class="post-list-btn" @click="updatePost(item)">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn" @click="removePost(item.id)">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-list.js">
</script>
