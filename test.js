calcInPolishNotation = (array) => {
  let operands = [];
  let operators = [];
  
  for(let cell of array) {
    if (isFinite(cell)) {
      operands.push(cell);
    } else {
      operators.push(cell);
    }
  }

  for (let i = 0; i < operands.length - 1; i++) {
    switch (operators[i]) {
      case '+': 
        operands[i+1] = operands[i] + operands[i + 1];
        break;

      case '-':
        operands[i + 1] = operands[i] - operands[i + 1];
        break;

      case '*':
        operands[i + 1] = operands[i] * operands[i + 1];
        break;

      case '/':
        if (operands[i + 1] === 0) { return null;}
        operands[i + 1] = operands[i] / operands[i + 1];
        break;
    }
  }

  return operands.at(-1);
};

console.log(calcInPolishNotation([7, 2, 3, '*', '-']));