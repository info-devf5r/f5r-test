/**
* find() 함수 간단한 예시 - 기존 배열 변경 안되는것과 반환값 확인
* */
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(array1); // 결과 [ 5, 12, 8, 130, 44 ]
console.log(found); // 결과 12

/**
 * find() 사용방법
 * */

const findArray = [
    { nickName: 'Tang', age: '10' },
    { nickName: 'Min', age: '20' },
    { nickName: 'Jae', age: '30' },
    { nickName: 'DDong', age: '40' }
];

const find = findArray.find((element, index, array) => element.age > 10);

console.log(find); // 결과 { nickName: 'Min', age: '20' }

