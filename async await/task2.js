const ids = [43, 21, 55, 100, 10]
const fetchJSONAsync = async(url, init)=> {
        let requests = await fetch(url, init)
        if(requests.ok) {
            const result = await requests.json()
            return result
        } else {
            throw new Error(`Ошибка запроса`)
        }
}
const getTodosByIds = ids => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return Promise.all(ids.map(id => fetchJSONAsync(`${url}/${id}`)))
}
const main = async()=> {
    try {
        const allTaskss = await getTodosByIds([43, 21, 55, 100, 10])
        console.log(allTaskss)
    } catch(e) {
        console.log(`error`, e)
    }
}
main()
