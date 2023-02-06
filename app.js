const str = 'Vasy Pupkina'
console.log(str.includes('a'))
console.log(str.startsWith('V'))
console.log(str.endsWith('n'))

console.log(new String('Vasy Pupkin'))

console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.replace('V', 'W'))
console.log(str.replaceAll('a', 'W'))
console.log(str.replace(/a/g, 'i'))

const str2 = '   VAsfger    GErbrs'
console.log(str2)
console.log(str2.trim())