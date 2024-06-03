const calculator = document.getElementById('calculator')
const output = document.querySelector(".output")

let operation = []
const operators = ["/", "*", "+", "."] 

calculator.addEventListener('click', (event) => {
    //check double operator values && operator values cannot be at the beginning of a str
    if (event.target.attributes.data?.value && operators.includes(event.target.attributes.data.value)) {
        if (operation.length > 0 && !operators.includes(operation[operation.length - 1])){
            operation.push(event.target.attributes.data.value)
        } 
        output.innerHTML = operation.join('')
    }
    //numbers 
    if (event.target.attributes.data?.value == 'number'){
        operation.push(event.target.innerHTML)
        output.innerHTML = operation.join('')
    }
    //minus operator 
    if (event.target.attributes.data?.value == '-'){
        //-- -> +
        if (event.target.attributes.data.value == operation[operation.length - 1]){
            operation.pop();
            operation.push('+') 
            output.innerHTML = operation.join('')
        }
        else {
            operation.push(event.target.innerHTML)
            output.innerHTML = operation.join('')
        }
    }
    //equals button
    if (event.target.attributes.data?.value == 'equals'){ 
        if (operators.includes(operation[operation.length - 1])){
            operation.pop();
            output.innerHTML = operation.join('');
            let result = eval(operation.join(''))
            output.innerHTML = result;
            operation = [result]
        } else {
            let result = eval(operation.join(''))
            output.innerHTML = result;
            operation = [result]
        }
    }
    //all clear button
    if (event.target.attributes.data?.value == 'AC') 
        operation = []
        output.innerHTML = operation.join('');
    //delete button
    if (event.target.attributes.data?.value == 'delete') 
        operation.pop();
        output.innerHTML = operation.join('');
})