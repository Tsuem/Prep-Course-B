// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let acc = 0;
    for (let i = 1; i <= 10; i++) {
      acc += i 
    }
    return acc
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let pairNumbers = [];
  let i = 0;
  while (i < array.length) {
    if(array[i] % 2 === 0) {
      pairNumbers.push(array[i]);
    }
    i++;    
  }
  return pairNumbers;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /* let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let squared = Math.pow(array[i], 2);
    newArray.push(squared);
  }
  return newArray */
  return array.map(function(num) {
    return Math.pow(num, 2);
  });
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let result = array.reduce((acc, num) => acc + num, 0)
  return result
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // 100 + "" = "100"
  let numberToString = num + "";
  return numberToString.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
