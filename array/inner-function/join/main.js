const a = ['바람', '비', '불'];
const myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
const myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
const myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
const myVar4 = a.join('');    // myVar4에 '바람비불'을 대입

const array = ['바람', null, '비', undefined, '불'];

console.log(array.join()); // 결과값: 바람,,비,,불
