<template>
  <div v-if="error"> {{ error}} </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost.js'
import Spinner from '../components/Spinner.vue'

//import the useRoute function from vue-router package
//creates a route instance that 
import { useRoute } from 'vue-router'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
      const route = useRoute()

      //this sends a request to the JSON-Server for a specific post 
          //we pass in the props of this component to make the request
      //const { post, error, load } = getPost(props.id)

      //we can also use the route instance and directly access data inside the route params
        //here, we are pulling a parameter with the name id from the route
      const { post, error, load } = getPost(route.params.id)

      load()

      return { post, error}
    }
}
</script>

<style>

</style>