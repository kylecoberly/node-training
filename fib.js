module.exports = function fib(iteration){
    var firstNumber = 1;
    var secondNumber = 1;
    var newNumber;
    for (var i = 0; i < iteration; i++){
        if (i > 1) {
            newNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = newNumber;
        }
    }
    return secondNumber;
}
