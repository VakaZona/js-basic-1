const arr = ['!', 'JS', 'love', 'I']
let res = []

for (i = 0; i < arr.length; i++) {
    res = res.concat(arr[arr.length - 1 - i])
    console.log(arr[arr.length - 1 - i])
}

console.log(res.join(' '))

let res2 = []
for (let i = arr.length - 1; i >= 0; i--) {
    res2.push(arr[i])
}
console.log(res2.join(' '))