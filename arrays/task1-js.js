const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']
const giveParcel = function(name) {
for(let i = 0;i < 3;i++) {
    alert(`${peopleWaiting[0]} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
    peopleWaiting.shift()
}
}
const leaveQueueWithoutParcel = function() {
    for(let i = 0; i < 4; i++) {
        alert(`${peopleWaiting[peopleWaiting.length - 1]} не получил(а) посылку и ушел(ла) из очереди.`)
    peopleWaiting.pop()
    }
}
giveParcel()
leaveQueueWithoutParcel()

