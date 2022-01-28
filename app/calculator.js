'use strict';

function add(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    let c = 0;
    for(let i = 0; i<b; i++){
        c += a;
    }
    return c;
}

function divide(a,b){
    if (b === 0){
        return Error("Can't divide by zero");
    }
    return a/b;
}

module.exports={
    add,
    minus,
    multiply,
    divide
}