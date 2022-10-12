function zero(){
    console.log('hi zero');
}

function one() {
    console.log('hi one');
    three();
}

function two() {
    console.log('hi two');
}

function three() {
    console.log('hi three');
}

zero();

setTimeout(function timeout() {
    two();
}, 500);

one();