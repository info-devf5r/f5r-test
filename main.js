let test1 = 'asd';
let test2 = 2;
let objectTest = { a: '1', b: 2 };
let ArrayTest = [1, 2, 3, 4, 5];


function a() {
    const text = 'start';
    console.log('a is first', text, test1);
}

function b() {
    const text2 = 'b start';
    a();
    console.log('b is second', text2, test2);
    d();
}

function c() {
    b();
}

function d() {
    console.log('d is last', objectTest.b);
}

function start2() {
    console.log('start2')
}


function start3() {
    console.log('start3')
}

c();

start2();

start3();