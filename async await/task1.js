const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
let isLoading = false
const createNewPost = async()=> {
    try {
        isLoading = true
        const postURL = await fetch(POSTS_URL, {
            method: `POST`
        })
        const json = await postURL.json()
        console.log(`result`, json)
    } catch(error) {
        console.log(`error`, error)
    } finally {
        isLoading = false
    }
    
}
createNewPost()