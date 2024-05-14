function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(){
    return a * b;
}

function divide(){
    return a / b;
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

function makeInt(n) {
    return parseInt(n, 10);
} 

console.log(makeInt("10"));
console.log(makeInt("5")); 
console.log(makeInt("Hello")); 
console.log(makeInt("101")); 



function preserveDecimal(n) {
    return parseFloat(n);
}

console.log(preserveDecimal("10.25"));
console.log(preserveDecimal("5")); 
console.log(preserveDecimal("Hello")); 
console.log(preserveDecimal("10.50"));