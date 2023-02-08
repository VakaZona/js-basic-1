'use strict'

// document.querySelector('.button').addEventListener('click', function() {
//     const input = document.querySelector('.input').value
//     if (!input) {
//         retrun
//     }
//     document.querySelector('.panel').innerText = input
//     document.querySelector('.input').value = ''
// })

function submitForm() {
    const input = document.querySelector('.input').value
    if (!input) {
        retrun
    }
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''
    document.querySelector('.notification').classList.add('notification_active')
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}


// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if (e.code == 'Enter') {
//         submitForm()
//         console.log('Enter')
//     }
// })
