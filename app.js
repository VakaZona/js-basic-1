'use strict'

// addEventListener('load', () => {
//     console.log(document)
// })

console.log(document.querySelector('.panel'))
console.log(document.querySelector('.panel').innerHTML)

const panelText = document.querySelector('.panel').innerText
console.log(panelText)

document.querySelector('.panel').innerText = 'New Text'

document.querySelector('.input').value = 'Text'

