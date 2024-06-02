const calculator = document.getElementById('calculator')
const output = document.querySelector(".output")

let operation = []

const operators = ["/", "*", "+", "-"]

//operation buttons 
const operationFunction = (event) => {
    console.log("ss");
    if (event.target.innerText !== operation[operation.length - 1]) {
        operation.push(event.target.innerText)
    }
    output.innerHTML = operation.join('')
}

//divide button 
function divideFunction() {
    operation.push(' / ')
    output.innerHTML = operation.join('');
}

//equals button  
function equalsFunction() {
    let result = eval(operation.join(''))
    output.innerHTML = result;
    operation = [result]
}

//all clear button 
function clearFunction() {
    operation = []
    output.innerHTML = operation.join('');
}

//delete button
function deleteFunction() {
    operation.pop();
    output.innerHTML = operation.join('');
}

//operators 
function removeDuplicateOperators() {
    console.log(operation)
    if (operation[operation.length - 1] === operation[operation.length - 2]) {
        operation.pop()
    }
    output.innerHTML = operation.join('');
}

calculator.addEventListener('click', (e) => {
    console.log('>>> e', e)

    if (e.target.attributes.data?.value && operators.includes(e.target.attributes.data.value)) {
        console.log('>>> je to operator')
    }
})


// na vysvetleni
// calculator.addEventListener('click', (e) => operationFunction(e))
// calculator.addEventListener('click', operationFunction)

const func = (value, funcArg) => {
    funcArg(value)
}


const func2 = (value) => {
    console.log('>>> value', value)
}

func("click", func2)
func("click", (e) => func2(e))
