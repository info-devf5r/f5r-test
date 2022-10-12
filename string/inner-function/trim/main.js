/**
 * trim()을 이용한 양 끝의 공백 제거
 * */
const greeting = '   Hello world!   ';

console.log(greeting); // 결과: "   Hello world!   ";
console.log(greeting.trim()); // 결과: "Hello world!";
console.log(greeting); // 결과: "   Hello world!   ";

/**
 * trimStart(), trimEnd()를 이용한 한쪽의 공백 제거
 * */
const start = 'start/';
const nickname = '    Tae Min     ';
const end = '/end'

console.log(start + nickname + end); // 결과: "start/    Tae Min     /end";
console.log(start + nickname.trimStart() + end); // 결과: "start/Tae Min     /end";
console.log(start + nickname.trimEnd() + end); // 결과: "start/    Tae Min/end";
console.log(start + nickname + end); // 결과: "start/    Tae Min     /end";