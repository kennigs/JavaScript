// 1-ый способ через createElement
const firstForm = document.querySelector(`body`)
const form = document.createElement('form')
form.className = 'create-userr-form'
const label1 = document.createElement(`label`)
label1.textContent = `Имя`
const input1 = document.createElement(`input`)
input1.type = `password`
input1.name = `password`
input1.placeholder = `Введите ваше имя` 
const label2 = document.createElement(`label`)
label2.textContent = `Пароль`
const input2 = document.createElement(`input`)
input2.type = `password`
input2.name = `password`
input2.placeholder = `Введите ваш пароль` 
const button = document.createElement(`button`)
button.type = `submit`
button.textContent = `Подтвердить`
label1.append(input1)
label2.append(input2)
form.append(label1)
form.append(label2)
form.append(button)
firstForm.insertAdjacentElement(`beforeend`, form)
// 12-ой способ через innerHTML
console.log(firstForm.innerHTML);
firstForm.innerHTML = `<form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>

<form class="create-userr-form"><label>Имя<input type="password" name="password" placeholder="Введите ваше имя"></label><label>Пароль<input type="password" name="password" placeholder="Введите ваш пароль"></label><button type="submit">Подтвердить</button></form>
<form class="create-userrr-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`