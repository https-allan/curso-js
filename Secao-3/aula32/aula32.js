// ... rest, ... spread

const numeros = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9]  // 2
];

//          0                     1
//      0   1     2       3       4      5 
const [[um, dois, tres], [quatro, cinco, seis]] = numeros;

console.log(um, dois, tres);