const array1 = [1, 2, 3, 4];
const initialValue1 = 5;

// 5 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce((previousValue, currentValue, index, array) => {
    console.log(previousValue, currentValue, index);
    /**
     *  결과
     *
     * 5 1 0
     * 6 2 1
     * 8 3 2
     * 11 4 3
     *
     **/

    return previousValue + currentValue;
}, initialValue1);

console.log('최종합: ', sumWithInitial); // 결과: 15

const array2 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
const sum = array2.reduce((previousValue, currentValue, index, array) => {
    console.log(previousValue, currentValue, index);
    /**
     *  결과
     *
     * 1 2 1
     * 3 3 2
     * 6 4 3
     *
     **/
    return previousValue + currentValue;
});

console.log('최종합: ', sum); // 결과: 10







/**
 *  결과 2
 *
 * 0 1 0
 * 1 2 1
 * 3 3 2
 * 6 4 3
 *
 **/