<template>
  <div class="tag">
    Tag Page
    <div v-if="error">{{ error }}</div>
    <div v-if="taggedPosts.length">
        <PostList :posts="taggedPosts"/>
    </div>
    <div v-else>
        <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts.js'
import { useRoute } from 'vue-router' 
import { computed, ref } from 'vue'

export default {
    components: { PostList, Spinner },
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

</style>