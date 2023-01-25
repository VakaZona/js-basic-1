const tasks = ['Task 1']

function AddTask (task, tasks) {
    tasks.push(task)
    console.log(tasks)
}

function DeleteTask(task, tasks) {
    const elementId = tasks.indexOf(task)
    if (elementId === -1) {
        return
    }
    return tasks.splice(elementId, 1)
    console.log(tasks)

}

function UnshiftTask(task, tasks) {
    const result = DeleteTask(task, tasks)
    if (!result) {
        return
    }
    tasks.unshift(result[0])
    console.log(tasks)
    
}

AddTask('Task 2', tasks)
AddTask('Task 3', tasks)
AddTask('Task 4', tasks)
DeleteTask('Task 3', tasks)
UnshiftTask('Task 4', tasks)



