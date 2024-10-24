/*
     객체는 프로퍼티의 집합이다.
     프로퍼티는 항상 key 와 value 세트로 구성된다.
*/

/*
    프로퍼티 key 란
    빈 문자열을 포함하는 모든 문자열 또는 심볼 값
    value 에 접근하기 위한 식별자의 역할을 하게 된다.
    문자열이기 때문에 key 는 '' 로 감싸야하지만,
    네이밍 규칙을 맞춘다면 '' 는 생략이 가능하다.
    규칙을 위반하게 되면 '' 반드시 사용해야 된다.
*/
var obj = {
    normal : 'hi',   // 작성규칙 맞추면 '' 생략 가능
    '@ s p a c e @' : 'space value', // 특수기호
    '' : '',    // 빈 문자열 경우에는 오류 발생 x 하지만 권장 하지 않음
    0 : 1,      // 숫자 키는 내부적으로 문자열로 변환 된다.
    var : 'var',  // 예약어를 key 로 사용할 수 있다 하지만 권장 하지 않음
    normal : 'new value'    // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어 쓰게 된다.
};

// 출력시 순서는 정수 key는 자동 정렬, 그 외 프로퍼티는 작성 순서로 정렬 
console.log(obj);

// 프로퍼티 동적으로 추가하기
var key = 'test';

// test : test value

// 대괄호 표기법
obj[key] = 'test value';

console.table(obj);