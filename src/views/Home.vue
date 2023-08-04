<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts.js'
import Spinner from '../components/Spinner.vue'

//import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
    
    // This section has been replaced with the getPosts() composable
    // const posts = ref([])
    // const error = ref(null)

    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/post')
    //     if (!data.ok) {
    //       throw Error('no data available')
    //     }
    //     posts.value = await data.json()
    //   }
    //   catch (err) {
    //     error.value = err.message
    //     console.log(error.value)
    //   }

    //   load()

    //   return { posts, error }
    
  }
}
</script>
<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
