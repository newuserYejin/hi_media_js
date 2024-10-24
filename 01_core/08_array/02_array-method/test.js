numbers = [1,2,3,4,5]

numbers.reduce((pre,currV,currI,array) => {
    console.log(`previouseValue : ${pre}`)
    console.log(`currentvalue : ${currV}`)
    console.log(`currentIndex : ${currI}`)
    console.log(`array : ${array}`)
})

const sum2 = numbers.reduce((pre,currV) => {
    return pre + currV
})

console.log("sum2 결과: ",sum2)