function renderTask(parent, task) {
    let div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        form = document.createElement("form"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        button = document.createElement("button")
    div1.className = "task-item"
    div1.dataset.taskId = task.id
    div2.className = "task-item__main-container"
    div3.className = "task-item__main-content"
    form.className = "checkbox-form"
    input.className = "checkbox-form__checkbox"
    input.type = "checkbox"
    input.id = "task-" + task.id
    label.htmlFor = "task-" + task.id
    span.className = "task-item__text"
    span.innerText = task.text
    button.className = "task-item__delete-button default-button delete-button"
    button.dataset.deleteTaskId = task.id
    button.textContent = " Удалить "
    form.append(input, " ", label)
    div3.append(form, " ", span)
    div2.append(div3, " ", button)
    div1.append(div2)

    parent.append(div1)
}
// task 3 delete task
function renderModal(parent) {
    let str = `<div class="modal-overlay modal-overlay_hidden">
<div class="delete-modal">
<h3 class="delete-modal__question">
    Вы действительно хотите удалить эту задачу?
</h3>
<div class="delete-modal__buttons">
    <button class="delete-modal__button delete-modal__cancel-button">
    Отмена
    </button>
    <button class="delete-modal__button delete-modal__confirm-button">
    Удалить
    </button>
</div>
</div>
</div>`
    parent.insertAdjacentHTML("beforeend", str)
}
let idCounter = 3
let deleteTaskId

renderModal(document.body)
let delModal = document.body.lastElementChild
let taskList = document.querySelector(".tasks-list")
taskList.addEventListener(`click`,(event)=> {
    let t = event.target
    if (t.matches("button.task-item__delete-button")) {
        deleteTaskId = +t.dataset.deleteTaskId
        delModal.classList.remove("modal-overlay_hidden")
    }
    else if (t.matches("input.checkbox-form__checkbox")) { 
        let id = +t.id.match(/^task-(\d+)$/)[1]
        tasks.find(e => e.id === id).completed = t.checked
        console.log(tasks)
    }
}
)
const deleteCancel = document.querySelector(`.delete-modal__cancel-button`)
deleteCancel.addEventListener(`click`,(event)=> {
    event.preventDefault()
    delModal.classList.add("modal-overlay_hidden")
}
)
const deleteConfirm = document.querySelector(`.delete-modal__confirm-button`)
deleteConfirm.addEventListener(`click`,(event)=> {
    event.preventDefault()
    let index = tasks.findIndex(e => e.id === deleteTaskId)
    tasks.splice(index, 1)
    taskList.querySelector(`div[data-task-id="${deleteTaskId}"]`).remove()
    console.log(tasks)
    delModal.classList.add("modal-overlay_hidden")
}
)
// task 2 validate and task 1 add task
function validateInput() {
    let text = input.value,
        task = tasks.find(e => e.text === text)

    input.setCustomValidity(task ? "Задача с таким названием уже существует." : "")
    return input.checkValidity()
}
const form1 = document.querySelector(`form`)
form1.addEventListener(`submit`,(event)=> {
    event.preventDefault()
    form1.querySelector(".error-message-block")?.remove()

    if (!validateInput()) {
        let obj = input.validity,
            message = obj.valueMissing
                ? "Название задачи не должно быть пустым"
                : input.validationMessage
        let span = document.createElement("span")
        span.className = "error-message-block"
        span.textContent = message
        form.append(span)
        return
    }


    ++idCounter
    let task = {
        id: idCounter,
        text: input.value
    }
    tasks.push(task)
    input.value = ""
    renderTask(taskList, task)
})

const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]



for (let task of tasks)
    renderTask(taskList, task)

let form = document.querySelector(".create-task-block"),
    input = form.taskName

input.value = ""
form.noValidate = true
input.required = true
// task 4 night theme
const body = document.querySelector(`body`)
const main = document.createElement(`div`)
main.className = `container`

const allTaskItem = document.querySelectorAll(`.task-item`)
const allButtons = document.querySelectorAll(`button`)

body.addEventListener(`keyup`, (event)=> {
    event.preventDefault()
    const { key } = event
    console.log(key);
    if(key === `Tab`) {
    if(body.style.background === `initial`) {
        body.style.background = `#24292E`
    }
    else {
        body.style.background = `initial`
    }
    allTaskItem.forEach(elem => {
        if(elem.style.color === `initial`) {
            elem.style.color = `#ffffff`
        }
        else {
            elem.style.color = `initial`
        }
    })
    allButtons.forEach(elem => {
        if(elem.style.border === `none`) {
        elem.style.border = `1px solid #ffffff`
        }
        else {
            elem.style.border = `none`
        }
    })
    }
})
// body.addEventListener(`keydown`, (event)=> {
//     event.preventDefault()
//     const { key } = event
//     console.log(key);
//     if(key === `Tab`) {
//     body.style.background = `initial`
//     allTaskItem.style.color = `initial`
//     allButtons.style.border = `none`
//     }    
// })