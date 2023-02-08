'use strict'

function submitForm() {
    const input = document.querySelector('.input').value
    if (!input) {
        retrun
    }
    document.querySelector('.panel').innerText = input
    // document.querySelector('.input').value = ''
    // document.querySelector('.notification').classList.add('notification_active')

    //bad practice
    document.querySelector('.notification').getAttribute('class')
    document.querySelector('.notification').setAttribute('class', 'notification_active')

}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}

const panelText = 'Panel'
const panelClass = 'button'
const newElement = document.createElement('div')
newElement.setAttribute('user-id', 1)
newElement.classList.add('panel')
// newElement.innerText = 'Button'

newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`

document.querySelector('.test').appendChild(newElement)



