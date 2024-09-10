const nameUser = (name)=> {
    const li = document.createElement(`li`)
    const a = document.createElement(`a`)
    a.href = `#`
    li.append(a)
    a.textContent = name

    return li
}
const url = `https://jsonplaceholder.typicode.com/users`
const span = document.querySelector(`span`)
const isHidden = span.hasAttribute(`hidden`)
const toggleHidden = ()=> {
    if(isHidden) {
        span.remove(`hidden`)
    } else {
        span.setAttribute(`hidden`, ``)
    }
}
const ids = [5, 6, 2, 1]
const dataContainer = document.querySelector(`#data-container`)
toggleHidden()
const getUsersByIds = (ids)=> {
    const result = ids.map((id)=> fetch(`${url}/${id}`))
    Promise.all(result) 
        .then((responses)=> {
            const dataResult = responses.map((response)=> response.json())
            return Promise.all(dataResult)
            })
        .then((names)=> {
            names.forEach((name)=> {
                const addUsers = nameUser(name.name)
                dataContainer.append(addUsers)
            })
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(()=> {
            toggleHidden()
        })
}
getUsersByIds(ids)