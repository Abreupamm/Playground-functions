// Desafio 11
function generatePhoneNumber(numeros) {
  let telefone = '';
  let resultado;
  let valorIncorreto = 'não é possível gerar um número de telefone com esses valores';
  let tamanhoIncorreto = 'Array com tamanho incorreto.';
  if (numeros.length === 11) {
    for (let i = 0; i < numeros.length; i += 1) {
      resultado = 0;
      if (numeros[i] >= 0 && numeros[i] <= 9) {
        let repct = numeros[i];
        for (let quantidade of numeros) {
          if (repct === quantidade) {
            resultado += 1;
          }
        }
        if (resultado >= 3) {
          return valorIncorreto;
        }
      } else {
        return valorIncorreto;
      }
    }
    telefone = '(' + numeros[0] + numeros[1] + ') ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10];
    return telefone;
  } else {
    return tamanhoIncorreto;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangulo = true;
  let naoTriangulo = false;
  let somaDeDoisLados = lineB + lineC;
  let diferenca = lineB - lineC;
  let valorAbsoluto = Math.abs(diferenca);
  if (lineA < somaDeDoisLados && lineA > valorAbsoluto) {
    return triangulo;
  } else {
    return naoTriangulo;
  }
}

// Desafio 13
function hydrate(string) {
  let quantBebidas = 0;
  let quantAgua = '';
  for (let i in string) {
    if (string[i] < 9 && string[i] > 0) {
      let number = parseInt(string[i]);
      /* converter string para inteiros
      referência https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=Cj0KCQjwz7uRBhDRARIsAFqjulkK7RaP_tPQsPxYFKE2GhETexiJEzJGMlhdFYkCRZuJH0c1DqpMQM0aAmTpEALw_wcB */
      quantBebidas += number;
    }
  }
  if (quantBebidas === 1) {
    return '1 copo de água';
  }
  quantAgua = quantBebidas + ' copos de água';
  return quantAgua;
}
