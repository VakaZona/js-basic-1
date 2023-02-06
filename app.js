const prices = [[2, 4], [3, 4], [10, [20, 40]]]

const res = prices.flat()
const res2 = prices.flat(2)

console.log(res, res2)

const res3 = prices.flatMap(el => el.concat([1]))
console.log(res3)