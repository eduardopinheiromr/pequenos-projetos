var logHistorico = document.getElementById('loghistorico');
var displayResultado = document.getElementById('displayresultado');
var input = document.getElementById('input');
var resultado = 0;
var expression = new Array();

function tecla(tecla) {
  input.value += tecla.value;
}
function ponto() {
  input.value += '.';
}
function limparResultado() {
  input.value = '';
  resultado = 0;
  resultadoAnterior = 0;
  temp = 0;
  displayResultado.innerHTML = '';
}

function limparInput() {
  input.value = '';
}
function showOnDisplay(resultado) {
  displayResultado.innerHTML = resultado;
}
function mountExpression(value1, operator) {
  expression[0] = value1;
  expression[1] = operator;
}
function igual() {
  expression[2] = Number(input.value);
  input.value = '';
  if (expression[1] === '+') {
    resultado = expression[0] + expression[2];
    showOnDisplay(resultado);
  } else if (expression[1] === '-') {
    resultado = expression[0] - expression[2];
    showOnDisplay(resultado);
  } else if (expression[1] === 'x') {
    resultado = expression[0] * expression[2];
    showOnDisplay(resultado);
  } else if (expression[1] === '÷') {
    resultado = expression[0] / expression[2];
    showOnDisplay(resultado);
  }
}
function adittion() {
  if (input.value === '') {
    showOnDisplay(`${resultado}+`);
    mountExpression(resultado, '+');
  } else {
    resultado += Number(input.value);
    showOnDisplay(resultado);
    mountExpression(resultado, '+');
    input.value = '';
  }
}

function subtraction() {
  if (input.value === '') {
    showOnDisplay(`${resultado}-`);
    mountExpression(resultado, '-');
  } else {
    if (resultado !== 0) {
      igual();
      input.value = '';
      showOnDisplay(`${resultado}-`);
      mountExpression(resultado, '-');
    } else {
      showOnDisplay(`${input.value}-`);
      mountExpression(input.value, '-');
      resultado = input.value;
      input.value = '';
    }
  }
}

function multiplication() {
  if (input.value === '') {
    showOnDisplay(`${resultado}x`);
    mountExpression(resultado, 'x');
  } else {
    if (resultado !== 0) {
      igual();
      input.value = '';
      showOnDisplay(`${resultado}x`);
      mountExpression(resultado, 'x');
    } else {
      showOnDisplay(`${input.value}x`);
      mountExpression(input.value, 'x');
      input.value = '';
    }
  }
}

function division() {
  if (input.value === '') {
    showOnDisplay(`${resultado}÷`);
    mountExpression(resultado, '÷');
  } else {
    if (resultado !== 0) {
      igual();
      input.value = '';
      showOnDisplay(`${resultado}÷`);
      mountExpression(resultado, '÷');
    } else {
      showOnDisplay(`${input.value}÷`);
      mountExpression(input.value, '÷');
      input.value = '';
    }
  }
}

function calcPorcentagem(valor1, valor2) {
  var result = (valor1 * valor2) / 100;
  return result;
}
function porcentagem() {
  expression[2] = Number(input.value);
  if (input.value === '') {
  } else if (resultado === 0) {
    resultado = Number(input.value) / 100;
    showOnDisplay(resultado);
    input.value = '';
  } else if (input.value !== '' && resultado !== 0) {
    expression[2] = Number(input.value);
    input.value = '';
    if (expression[1] === '+') {
      resultado = expression[0] + calcPorcentagem(expression[0], expression[2]);
      showOnDisplay(resultado);
    } else if (expression[1] === '-') {
      resultado = expression[0] - calcPorcentagem(expression[0], expression[2]);
      showOnDisplay(resultado);
    } else if (expression[1] === 'x') {
      resultado = expression[0] * calcPorcentagem(expression[0], expression[2]);
      showOnDisplay(resultado);
    } else if (expression[1] === '÷') {
      resultado = expression[0] / calcPorcentagem(expression[0], expression[2]);
      showOnDisplay(resultado);
    }
  }
}
/*
function sen() {
  input.value = 'sen()';
}
function cos(){}
function tan(){}
function (){}*/
