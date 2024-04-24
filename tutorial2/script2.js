let girls = ["cecilie","lone"];
let boys = ["emil","tobias","linus"];
let children = girls.concat(boys);
console.log(girls);
console.log(boys);
console.log(children);

let array1 = ["a","b","c"];
let array2 = [1,2,3];
let array3 = ["x","y","z"];
let array4 = array1.concat(array2,array3);
console.log(array4);

const oldArray = [[1,2],[3,4],[5,6]];
const newArray = oldArray.flat();
console.log(oldArray);
console.log(newArray);