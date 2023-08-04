<template>
  <div class="tag">
    Tag Page
    <div v-if="error">{{ error }}</div>
    <div v-if="taggedPosts.length" class="layout">
        <PostList :posts="taggedPosts"/>
        <TagCloud :posts="posts" />
    </div>
    <div v-else>
        <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts.js'
import { useRoute } from 'vue-router' 
import { computed, ref } from 'vue'

export default {
    components: { PostList, Spinner, TagCloud },
    setup() {
        const { posts, error, load } = getPosts() 

        load()

        const route = useRoute()
        const tag = route.params.tag

        const taggedPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(tag)
            })
        })

        return { posts, taggedPosts, error }
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

</style>