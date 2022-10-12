/*
* 문제
*
* 엄탱은 진탱, 재탱 친구들과 함께 화채가 먹고싶어 냉장고를 열어 봤더니 사과, 오렌지, 바나나, 우유가 있었다.
* 이 때, 오렌지를 제외한 과일 화채를 만들려면 어떻게 해야할까요?? (단, 친구들끼리 과일을 1조각씩 먹게 해주세요.)
*
* */

const fruits = ['사과', '오렌지', '바나나'];
const etcIngredients = ['우유'];
const exceptionFruits = ['오렌지'];

function makeFruitSalad(fruits, etcIngredients, exceptionFruits) {
    return fruits
        .filter(fruit => !exceptionFruits.includes(fruit))
        .map(fruit => [`${fruit} 1조각`, `${fruit} 1조각`, `${fruit} 1조각`])
        .reduce((prev, curr) => `${curr[0].split(' ')[0]} ${curr.length}조각  ${prev}`,
            `${etcIngredients.toString()} 화채`);
}

function getFruitSaladIngredients(fruits, etcIngredients, exceptionFruits) {
    return fruits
        .filter(fruit => !exceptionFruits.includes(fruit))
        .map(fruit => [`${fruit} 1조각`, `${fruit} 1조각`, `${fruit} 1조각`])
        .reduce((prev, curr) => prev.concat(curr), etcIngredients)
}

console.log(makeFruitSalad(fruits, etcIngredients, exceptionFruits)); // 결과1
console.log(getFruitSaladIngredients(fruits, etcIngredients, exceptionFruits)); //결과2

//화채 결과값1: '바나나 3조각 사과 3조각 우유 화채'
//화채 재료들 결과값2: [ '우유', '사과 1조각', '사과 1조각', '사과 1조각', '바나나 1조각', '바나나 1조각', '바나나 1조각' ]