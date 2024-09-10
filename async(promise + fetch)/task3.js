const HTML = (photo, text)=> {
    const li = document.createElement(`li`)
    const img = document.createElement(`img`)
    const h3 = document.createElement(`h3`)
    li.className = `photo=item`
    img.className = `photo-item__image`
    h3.className = `photo-item__title`
    img.setAttribute(`src`, photo)
    h3.textContent = text
    li.append(img)
    li.append(h3)

    return li
}
const dataContainer = document.querySelector(`#data-container`)
const span = document.querySelector(`span`)
const isHidden = span.hasAttribute(`hidden`)
const toggleHidden = ()=> {
    if(isHidden) {
        span.remove(`hidden`)
    } else {
        span.setAttribute(`hidden`, ``)
    }
}
const url = `https://jsonplaceholder.typicode.com/photos`
const ids = [60, 12, 55]
const getFastestLoadedPhoto = (ids)=> {
        const urlId = ids.map((id)=> fetch(`${url}/${id}`))
        console.log('urlId: ', urlId);
        Promise.race(urlId)
            .then((response)=> {
                if(!response.ok) {
                    throw new Error(`Ошибка запроса`)
                }
                return response.json()
            })
            .then((result)=> {
                const photo = result.url
                console.log('photo: ', photo);
                const text = result.title
                console.log('text: ', text);
                const addHTML = HTML(photo, text)
                console.log('addHTML: ', HTML);
                dataContainer.append(addHTML)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(()=> {
                toggleHidden()
            })
}
getFastestLoadedPhoto(ids)