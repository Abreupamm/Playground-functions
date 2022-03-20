// Desafio 1
function compareTrue(a, b) {
  let resultado;
  if (a === true && b === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let multiplica = base * height;
  let resultado = multiplica / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let resultado = [];
  resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(nome) {
  let ultimoIndice = nome.length - 1;
  let primeiro = nome[0];
  let ultimo = nome[ultimoIndice];
  let resultado = ultimo + ', ' + primeiro;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontoVitoria = wins * 3;
  let pontoEmpate = ties;
  return pontoVitoria + pontoEmpate;
}

// Desafio 6
function highestCount(numeros) {
  let maiorValor = Math.max(...numeros);
  let indiceValor = numeros.indexOf(maiorValor, 0);
  let resultado = 1;
  for (let a = 0; a < numeros.length; a += 1) {
    if (numeros[a] === maiorValor && a !== indiceValor) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1;
  let gato2 = cat2 - mouse;
  let resultado;
  if (gato2 > gato1 && gato1 > 0) {
    resultado = 'cat1';
  } else if (gato2 === gato1) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(numero) {
  let resultado = [];
  for (let n of numero) {
    if (n % 3 === 0 && n % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (n % 3 === 0) {
      resultado.push('fizz');
    } else if (n % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase1) {
  let codigo = ['', 'a', 'e', 'i', 'o', 'u'];
  let resultado = '';
  for (let index = 0; index < frase1.length; index += 1) {
    if (codigo.includes(frase1[index]) === true) {
      /* verficar se a letra retornada pelo for existe na string frase1
      referência: https://www.w3schools.com/jsref/jsref_includes.asp */
      let indice = codigo.indexOf(frase1[index]);
      resultado = resultado + indice;
    } else {
      resultado = resultado + frase1[index];
    }
  }
  return resultado;
}

function decode(frase2) {
  let codigo = ['', 'a', 'e', 'i', 'o', 'u'];
  let resultado = '';
  for (let index = 0; index < frase2.length; index += 1) {
    let indice = frase2[index];
    if (indice > 0) {
      resultado = resultado + codigo[indice];
    } else {
      resultado = resultado + indice;
    }
  }
  return resultado;
}

// Desafio 10
function techList(tecnologia, nome) {
  let lista = [];
  if (tecnologia.length > 0) {
    tecnologia.sort();
    for (let tec of tecnologia) {
      lista.push({
        tech: tec,
        name: nome
      });
    }
    return lista;
  } else {
    return 'Vazio!';
  }
}

