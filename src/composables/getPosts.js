import { ref } from 'vue'
import { projectFirestore } from '../Firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            //create a reference to the posts collection in the FireStore
            //use the get() method to obtain all the docs in that collection
            const res = await projectFirestore.collection('posts')
                .orderBy('createdAt', 'desc')   //you can order by ascending by just saying ('createdAt')
                .get()

            posts.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
}

export default getPosts