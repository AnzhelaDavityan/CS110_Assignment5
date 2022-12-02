//Ex1
function matrixProduct(mat1, mat2) {
    let mat3 = [];
    for (let i = 0; i < mat1.length; i++) { //iterating through first matrix rows
        mat3[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {//iterating through second matrix columns
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) { ////calculating sum of pairwise products
                sum += mat1[i][k] * mat2[k][j];
            }
            mat3[i][j] = sum;
        }
    }
    return mat3;
}
//Ex2
function sumOfMatrices(mat1, mat2){
    let mat3=[];
    for (let i = 0; i < mat1.length; i++) {
         mat3[i] = [];
        for (let j = 0; j < mat1[i].length; j++) {
            let sum=0;
            sum+= mat1[i][j]+mat2[i][j];
            mat3[i][j]=sum;
        }
    }
    return mat3;
}
//Ex3
function sumOfArray(array){
let res=0;
let arr=[];
 
for (let i = 0; i < array.length; i++) {
    res+= array[i];
    }
    arr.push(res);
    return arr;
}

function sumOfEachRow(matrix){
let result=[]; 
for (let i = 0; i < matrix.length; i++) {
   
    result.push(sumOfArray(matrix[i]));
}
return result;
}
//Ex4
function countWords(str){
    return str.trim().split(/\s+/).length;
}
//Ex5
    function trim(string){
    let doneTrim=false;
    let word="";
    for(let i=0;i<string.length;i++){
    if(string[i] !==" "){
        doneTrim=true;
}
    if(doneTrim){
    word=word.concat(string[i]);
}
}
return word;
}

module.exports={
    matrixProduct:matrixProduct,
    sumOfMatrices:sumOfMatrices,
    sumOfArray:sumOfArray,
    sumOfEachRow:sumOfEachRow,
    countWords:countWords,
    trim:trim
}
