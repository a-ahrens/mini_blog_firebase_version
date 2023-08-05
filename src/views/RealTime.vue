<template>
  Real-time Data
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { projectFirestore } from '@/Firebase/config'
import { ref } from 'vue'
export default {
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {         //snap contains a snapshot of all the docs within the collection at the time of being called
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })

                posts.value = docs
            })
        return { posts }
    }
}
</script>

<style>

</style>