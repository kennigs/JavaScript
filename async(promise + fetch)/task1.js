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
const dataContainer = document.querySelector(`#data-container`)
toggleHidden()
const getUsers = ()=> {
    fetch(url)
        .then((response)=> {
            if(!response.ok) {
                throw new Error(`Ошибка запроса`)
            }
            return response.json()
        })
        .then((names)=> {
            names.forEach((name)=> {
                const addNames = nameUser(name.name)
                dataContainer.append(addNames)
            })
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(()=> {
            toggleHidden()
        })
}
getUsers()