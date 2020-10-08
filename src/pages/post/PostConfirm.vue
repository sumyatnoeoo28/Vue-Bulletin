<template>
	<v-container>
		<h2>Create Post Confirmation</h2>
		<v-form v-on:submit.prevent="confirmPost(createPost)">
			<v-container>
				<v-row>
					<v-col cols="4">
						<v-subheader>Title</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createPost.title }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">
						<v-subheader>Description</v-subheader>
					</v-col>
					<v-col cols="8">
							<v-subheader>{{ createPost.description }}</v-subheader>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" class="text-center">
						<v-btn type="submit" large color="primary" class="mr-4">Create</v-btn>
						<v-btn large color="primary" @click="cancelPost">Cancel</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</v-container>
</template>
<script src="../../services/post/post-confirm.js">
</script>