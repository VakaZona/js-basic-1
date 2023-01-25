const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4']

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Task 2'){
        continue
    }
    console.log(tasks[i])
}

console.log('-----------')

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Task 3'){
        break
    }
    console.log(tasks[i])
}

               