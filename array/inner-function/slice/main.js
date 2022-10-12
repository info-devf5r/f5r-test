// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//
// console.log(animals.slice(2)); //["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); //["camel", "duck"]
// console.log(animals.slice(1, 5)); //["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2)); //["duck", "elephant"]
// console.log(animals.slice(2, -1)); //["camel", "duck"]
// console.log(animals.slice()); //["ant", "bison", "camel", "duck", "elephant"]


/**
 *
 * 왜 slice는 얕은 복사로 데이터를 복사해서 주는데 원본 배열은 변경이 안되는 것일까??
 *
 * 그건 바로 배열이 갖고 있는 값이 기본형이냐 참조형이냐에 따라 다른것이다.
 * */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const animalsSlice1 = animals.slice();

animalsSlice1[0] = 'ant25';

console.log('');
console.log(animalsSlice1); // [ 'ant25', 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

const objects = [{ name: 'tang' }, { name: 'min' }, { name: 'jae' }];
const objectsSlice1 = objects.slice();

objects[0].name = 'tang25';

console.log('//');
console.log(objectsSlice1); // [ { name: 'tang25' }, { name: 'min' }, { name: 'jae' } ]
console.log(objects); // [ { name: 'tang25' }, { name: 'min' }, { name: 'jae' } ]


// 아래처럼 데이터를 변경하면 objectsSlice1[0]에 새로운 메모리가 할당되어 objectsSlice1[0]와 objects[0]은 독립적인 데이터가 된다.
objectsSlice1[0] = { name: 'godTang' }

console.log('');
console.log(objectsSlice1); // [ { name: 'godTang' }, { name: 'min' }, { name: 'jae' } ]
console.log(objects); // [ { name: 'tang25' }, { name: 'min' }, { name: 'jae' } ]
