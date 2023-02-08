'use strict'

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

localStorage.setItem('token', 'testtokecn')

console.log(localStorage.getItem('token'))

localStorage.clear()


