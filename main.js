//test
const prompt=require('readline-sync');
const{matrixProduct,sumOfMatrices,sumOfArray,sumOfEachRow,countWords, trim}=require ('./utils.js');
let mat1 = [
  [1, 2 ],
  [3, 4 ]
];
let mat2 = [
  [5, 6],
  [7, 8],
];


let matrix = [
  [1, 2, 3 ],
  [4, 5, 6 ],
  [7, 8, 9 ]
];


let sentence= prompt.question("Write a sentence");
let word=prompt.question("Write a word");
console.log(matrixProduct(mat1,mat2));
console.log(sumOfMatrices(mat1,mat2));
console.log(sumOfEachRow(matrix));
console.log(countWords(sentence));
console.log(trim(word));