/**
 * 배열 이어 붙이기
 * */
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

const result1 = alpha.concat(numeric);

console.log(alpha); // 결과: [ 'a', 'b', 'c' ]
console.log(result1); // 결과: ['a', 'b', 'c', 1, 2, 3]

/**
 * 배열에 값 이어 붙이기
 * */

const alpha2 = ['a', 'b', 'c'];

const result2 = alpha2.concat(1, [2, 3]);

console.log(alpha2); // 결과: [ 'a', 'b', 'c' ]
console.log(result2); // 결과: ['a', 'b', 'c', 1, 2, 3]

const result21 = alpha2.concat([1, 2, [3, 4]]);

console.log(alpha2); //[ 'a', 'b', 'c' ]
console.log(result21); //[ 'a', 'b', 'c', 1, 2, [ 3, 4 ] ]

/**
 * 배열에 객체 이어 붙이기
 * */

const alpha3 = ['a', 'b', 'c'];

const result3 = alpha3.concat({ d: 'd' }, [{ e: 'e' }, 3]);

console.log(alpha3); // [ 'a', 'b', 'c' ]
console.log(result3); // [ 'a', 'b', 'c', { d: 'd' }, { e: 'e' }, 3 ]

/**
 * concat의 주의사항
 * 1. concat 사용시 원본에 변형이없지만, 값들을 얕은 복사 하기 떄문에 참조형 타입의 데이터 값을 변경시에 원본 배열의 변형이 올 수 있습니다.
 * */

const alpha4 = ['a', 'b', 'c' , { d: 'd' }];

const result4 = alpha4.concat({ d: 'd' }, [{ e: 'e' }, 3]);

console.log(alpha4); //[ 'a', 'b', 'c', { d: 'd' } ]

result4[3].d = 'dddd';
result4[0] = 'aaa';

console.log(alpha4); // [ 'a', 'b', 'c', { d: 'dddd' } ]
console.log(result4); // [ 'aaa', 'b', 'c', { d: 'dddd' }, { d: 'd' }, { e: 'e' }, 3 ]



