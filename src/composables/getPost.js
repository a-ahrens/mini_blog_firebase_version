import { projectFirestore } from '@/Firebase/config'
import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {

            //simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })
            //sends a request to the firestore to "get" a document under the posts collecction
            // with a specific document id
            
            let res = await projectFirestore.collection('posts').doc(id).get()
            
            if(!res.exists) {
                throw Error('That post does not exist')
            }

            post.value = { ...res.data(), id: res.id }
        }

        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, error, load }
}

export default getPost