/*
    in 연산자는 존재 여부를 확인하는 연산자
    SQL 에서 썻던 것과 동일한 기능
*/

var student = {
    name : '조평훈',
    age : 20,
    test : undefined
};

console.log('name' in student);
console.log('aasd' in student);