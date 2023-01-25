const tasks = ['Task 1']

function addTask (task, tasks) {
    tasks.push(task)
    console.log(tasks)
}

function deleteTask(task, tasks) {
    const elementId = tasks.indexOf(task)
    if (elementId === -1) {
        return
    }
    tasks.splice(elementId, 1)
    console.log(tasks)

}

function unshiftTask(task, tasks) {
    const elementId = tasks.indexOf(task)
    if (elementId === -1) {
        return
    }
    const deleteTask = tasks.splice(elementId, elementId)
    newTask = deleteTask.join('')
    tasks.unshift(newTask)
    console.log(tasks)
}

addTask('Task 2', tasks)
addTask('Task 3', tasks)
addTask('Task 4', tasks)
deleteTask('Task 3', tasks)
unshiftTask('Task 4', tasks)



