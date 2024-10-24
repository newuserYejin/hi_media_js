// 배열의 고차 함수
// 고차함수 : 함수를 인자로 전달 받는 함수

// sort()

let numbers = [];

for(let i = 0 ;i <10; i++){
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬하기 전: ${numbers}`)

numbers.sort();

console.log(`정렬 후: ${numbers}`)

function comparer(a,b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(comparer);

console.log(`compare 정렬 후: ${numbers}`)

numbers.sort((a,b)=>{
    b-a
})

console.log(`내부 함수 정렬 후: ${numbers}`)

for(let i in numbers){
    console.log(`출력: ${i}`)
}

for(let i of numbers){
    console.log(`출력2 : ${i}`)
}

// numbers = [1,2,3,4,5]
let sum = 0

numbers.forEach(function(item,index){
    sum += item;                                     
    console.log(`${index+1}번째의 수 ${item}까지의 합: ${sum}`)
})

numbers.forEach(item => console.log(item))

numbers = [1,2,3,4,5]

numbers.map(item => item+10)

console.log(`map 실행:  ${numbers}`)

const length = ['apple','banana','mango'].map(item => item.length)

console.log(`map 후의 배열: ${length}`)

// filter()

const odd = numbers.filter(item => item % 2 != 0)

console.log(`odd: ${odd}`)
console.log("odd: ",odd)

// reduce()
/*
    previousValue : 이전 콜백의 반환값
    currentvalue : 배열의 요소 겂
    currentIndex : 인덱스
    array : 자신이 속한 배열
*/

numbers.reduce((pre,currV,currI,array) => {
    console.log(`previouseValue : ${pre}`)
    console.log(`currentvalue : ${currV}`)
    console.log(`currentIndex : ${currI}`)
    console.log(`array : ${array}`)

    return currV
})

const sum2 = numbers.reduce((pre,currV) => {
    return pre + currV
})

console.log("sum2: ",sum2)

/*
    배열의 some()
        - boolean으로 반환
        - 콜백함수 테스트를 통과하는지의 여부 (1개라도 만족하면 true)
 */

// 10 이상인 요소가 있는지 없는지 반환
let result = [1,4,5,8,9].some(item => item > 10);

console.log("result: ", result)

let result2 = [1,2,3,5,3].every(item => item % 1 >= 0)
console.log("result2: ",result2)

/* 
    find()
    - 콜백함수에 대응하는 결과가 참인 첫번째 요소 반환. 존재하지 않으면 undefined
*/

const student = [
    {name : "ho",
        score : 80,
        age : 18
    },
    {name : "eha",
        score : 95,
        age : 22
    },
    {name : "heeha",
        score : 100,
        age : 20
    },
]

result = student.find(item => item.name.includes("eh"))

console.log("result : ",result)

result = student.filter(item => item.score > 90)

console.log("result : ",result)

console.log("출력")
student.forEach(item =>{
    if(item.score > 90){
        console.log(item)
    }
})


