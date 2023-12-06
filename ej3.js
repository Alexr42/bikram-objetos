//declaración de variables para contar pares, positivos y negativos
let pares = 0;
let positivos = 0;
let negativos = 0;

//bucle para introducir 10 números por teclado
//i inicia en 0, mientras i sea menor que 10, i se actualiza en 1
for (let i = 0; i < 10; i++) {
//pedir que ingrese un número
    let numero = parseInt(prompt("escribe un número:"));
//se utiliza una condición para asegurar de que la entrada sea un número, en este caso isNaN es negativo(!) porque la funcion es NotaNumber, lo cual seria falso
if (!isNaN(numero)) {
//verificar si el número es par
    if (numero % 2 === 0) {
        pares++;
    }
//verificar si el número es positivo
    if (numero > 0) {
        positivos++;
    }
//verificar si el número es negativo
    if (numero < 0) {
        negativos++;
    }
} 
else {
    parseInt(prompt("introduce solo valores numericos:"));
    i--; // Restar 1 a i para que el bucle no avance si la entrada no es un número
}
}
//mostrar resultados
console.log("cantidad de pares: " + pares);
console.log("cantidad de positivos: " + positivos);
console.log("cantidad de negativos: " + negativos);
