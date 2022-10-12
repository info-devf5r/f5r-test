const months = ['Jan', 'March', 'April', 'June'];
let monthsSlice1 = months.splice(1, 0, 'Feb');

console.log(monthsSlice1); //  []
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

monthsSlice1 = months.splice(4, 1, 'May');

console.log(monthsSlice1); // [ 'June' ]
console.log(months); // ["Jan", "Feb", "March", "April", "May"]


const array = [1, 2, ['a', 'b'], 3, 4];
array.splice(0, 0, ['a', 'b'])
console.log(array);