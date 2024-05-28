const numberButtons = document.querySelectorAll('[data-number]')
const operatorDivide = document.querySelector('[data-divide]')
const operatorEquals = document.querySelector('[data-equals]')
const operatorPlus = document.querySelector('[data-plus]')
const operatorMinus = document.querySelector('[data-minus]')
const operatorMultiplication = document.querySelector('[data-multiplication]')
const operatorPeriod = document.querySelector('[data-period]')
const operatorDelete = document.querySelector('[data-delete]')
const operatorAC = document.querySelector('[data-AC]')

let operation = []

//operation buttons 
function operationFunction(event){
    operation.push(event.target.innerText)
    document.querySelector(".output").innerHTML = operation.join('');
}

//divide button 
function divideFunction(){
    operation.push(' / ')
    document.querySelector(".output").innerHTML = operation.join('');
}

//equals button  
function summarizeFunction(){
    let result = eval(operation.join(''))
    document.querySelector(".output").innerHTML = result;
    operation = [result]
}

//all clear button 
function clearFunction(){
    operation = []
    document.querySelector(".output").innerHTML = operation.join('');
}

//delete button
function deleteFunction(){
    operation.pop(); 
    document.querySelector(".output").innerHTML = operation.join('');
}

operatorPlus.addEventListener('click', operationFunction)
operatorMinus.addEventListener('click', operationFunction)
operatorMultiplication.addEventListener('click', operationFunction)
numberButtons.forEach(function(button){
    button.addEventListener('click', operationFunction);
});
operatorPeriod.addEventListener('click', operationFunction)
operatorDivide.addEventListener('click', divideFunction)
operatorEquals.addEventListener('click', summarizeFunction)
operatorAC.addEventListener('click', clearFunction)
operatorDelete.addEventListener('click', deleteFunction)
