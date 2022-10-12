/**
 * MDN 사이트에 따르면
 * 배열이 비어있는데 initialValue도 제공하지 않으면 TypeError가 발생합니다.
 * 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 initialValue를 제공되지 않은 경우,
 * 또는 initialValue는 주어졌으나 배열이 빈 경우엔 그 단독 값을 callback 호출 없이 반환합니다.
 *
 * 다음의 예제처럼 initialValue을 제공하지 않으면 출력 가능한 형식이 세 가지이므로, 보통 초기값을 주는 것이 더 안전합니다.
 * */

const maxCallback = ( acc, cur ) => Math.max( acc.x || acc, cur.x );

const resultAll = [{ x: 22 }, { x: 42 }].reduce(maxCallback, 23); // 42
const resultOneList = [{ x: 22 }].reduce(maxCallback, 23); // 23
const resultEmpty = [].reduce(maxCallback, 23); // 23

console.log(resultAll, resultOneList, resultEmpty);

// const resultAll = [{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
// const resultOneList = [{ x: 22 }].reduce(maxCallback); // { x: 22}
// // const resultEmpty = [].reduce(maxCallback); // TypeError
//
// console.log(resultAll, resultOneList);
