/**
 * 전역 스코프와 지역스코프 차이
 * */

var global = 'global';

function getGlobal() {
    return global;
}

// console.log(global); // 결과 : global
// console.log(getGlobal()); // 결과 : global

function getLocal() {
    var local = 'local';
    return local;
}

// console.log(local); // 에러 : local is not defined
// console.log(getLocal()); // 결과 : local



/**
 * javascript 에서 var는 함수 레벨 스코프를 따르고, let은 블록 레벨 스코프를 따른다.
 * 함수 레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다(참조할 수 없다)는 것이다.
 * */

//함수 레벨 스코프 예시 첫번째
function ckFunctionScope() {
    var x = 0;

    let bool = true;

    if (bool) {
        var x = 10;
        console.log('block inner');
        console.log(x); // 결과 : 10
    }

    console.log('block outer');
    console.log(x); // 결과 : 10
}

// ckFunctionScope();

//함수 레벨 스코프 예시 두번째
function ckFunctionScope2() {
    let bool = true;

    if (bool) {
        var x = 10;
        console.log('block inner2');
        console.log(x); // 결과 : 10
    }

    console.log('block outer2');
    console.log(x); // 결과 : 10
}

// ckFunctionScope2();

//블록레벨 스코프 예시 첫번째
function ckBlockScope() {
    let x = 0;

    let bool = true;

    if (bool) {
        //console.log(x); // ReferenceError: Cannot access 'x' before initialization
        let x = 10;
        console.log('block inner');
        console.log(x); // 결과 : 10
    }

    console.log('block outer');
    console.log(x); // 결과 : 0
}

ckBlockScope();

//블록레벨 스코프 예시 두번째
function ckBlockScope2() {
    let bool = true;

    if (bool) {
        let x = 10;
        console.log('block inner');
        console.log(x); // 결과 : 10
    }

    console.log('block outer');
    // console.log(x); // error : x is not defined
}

// ckBlockScope2();



// 정적 스코프(렉시컬 스코프) 예시
var name = 'teamin';

function setName() {
    var name = 'jinsik';

    console.log(getName());
}

function getName() {
    return name;
}

// console.log(getName()); // 결과: teamin
// setName(); // 결과: teamin