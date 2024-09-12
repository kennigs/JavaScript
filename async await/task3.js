fetchJSONAsync = async(url, init)=> {
    let response = await fetch(url,init)
    if(response.ok) {
        let result = response.json()
        return result
    } else {
        throw new Error(`Ошибка запроса`)
    }
}
const ul = document.createElement(`ul`)
ul.className = `data-container`
ul.textContent = `Название альбома`
document.body.prepend(ul)
const renderAlbums = async()=> {
    try {
    const url = `https://jsonplaceholder.typicode.com/albums`
    let albums = await fetchJSONAsync(url)
    let o = []
    for (let index = 0; index < albums.length; index++) {
        const element = albums[index].title;
        o.push(element)
        
        let li = document.createElement(`li`)
        li.textContent = o
        ul.append(li)
        o.shift(element)
    }
} catch(err){
    ul.textContent = `Произошла ошибка в получении данных об альбомах...`
}

}
renderAlbums()