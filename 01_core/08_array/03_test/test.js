// 생성자 함수를 통해 여러 명의 회원 생성
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.getInfo = () => {
        return `${this.name} 님의 성적은 ${this.score} 입니다.`;
    }
}

// 5명의 회원을 생성 후 ohgiraffers 배열에 담기
const member1 = new Student('조평훈', 20, 100);
const member2 = new Student('조평평', 21, 89);
const member3 = new Student('조평순', 15, 75);
const member4 = new Student('조팽팽', 24, 100);
const member5 = new Student('조핑구', 45, 49);

const ohgiraffers = [
    member1, member2, member3, member4, member5
];

console.log(ohgiraffers);

// ohgiraffers 배열을 성적 순으로 정렬
ohgiraffers.sort((a,b) =>{
   return a.score-b.score
})

console.log("성적순 ↓")
ohgiraffers.forEach(item =>{
    console.log(item.getInfo());
})

// ohgiraffers 배열을 나이 역순으로 정렬
ohgiraffers.sort((a,b)=>{
    return b.age - a.age
})

console.log("\n나이 역순 ↓")
ohgiraffers.forEach(item =>{
    console.log(item.name,"님의 나이는",item.age);
})

// ohgiraffers 배열을 이름 순으로 정렬
ohgiraffers.sort(function compare(a,b){
    if(a.name > b.name) return 1;
    if(a.name == b.name) return 0;
    if(a.name < b.name) return -1;
})

console.log("\n이름순 ↓")
ohgiraffers.forEach(item =>{
    console.log(item.name);
})

// ohgiraffers 배열을 활용해서 성적이 50 이상인
// 사람만 출력하는 구문을 작성해보자

let result = ohgiraffers.filter(item => item.score >= 50);

console.log("\n성적 50 이상 ↓")
result.forEach(item =>{
    console.log(item.getInfo());
})

// ohgiraffers 배열을 활용해서 성적이 70 ~ 90 이상인
// 사람만 출력하는 구문을 작성해보자

// result = ohgiraffers.filter(item => {
//     item.score >= 70 && item.score < 90;
// })

result = ohgiraffers.filter(item => {
    return item.score >= 70 && item.score<90
})

console.log("\n성적 70 이상 90 미만 ↓")
result.forEach(item =>{
    console.log(item.getInfo());
})

// ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 성적 정보를 변경해보자

result = ohgiraffers.find(item => item.name=="조평훈")

console.log("\n조평훈 학생의 정보 ↓")
console.log(result.getInfo());

// // ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// // 몸무게 정보를 추가해보자. weight -> 80 으로 추가

result = ohgiraffers.find(item => item.name=="조평훈")
result["weight"]  = 80;

console.log("\n조평훈 학생의 정보 ↓")
console.log(result);

// ohgiraffers 배열을 활용해서 성적이 동일한 사람을
// 출력하는 구문을 작성해보자

ohgiraffers[4].score = 75;

console.log("\n동점자 구하기 ↓")

for(let i = 0; i < ohgiraffers.length; i++){
    let currentScore = ohgiraffers[i].score
    for (let j = i+1; j<ohgiraffers.length; j++){
        if(currentScore == ohgiraffers[j].score){
            console.log("동점자 1:",ohgiraffers[i].getInfo())
            console.log("동점자 2:",ohgiraffers[j].getInfo())
        }
    }
}