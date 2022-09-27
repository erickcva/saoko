console.log("Sesion JS02 funciones");

//+++++++++++ Funcion declarada +++++++++++++
//llamado de la funcion declarada
console.log("Multiplica 5*6 =" + multiplica(5,6) );

/**
 * Este es un ejemplo de una funcion declarada.
 * (function declaration, function statement).
 * Una caracteristica de las funciones declaradas es que tiene un hoisting (Elevacion)
 * 
 * Realiza la multiplicacion de 2 números
 * @param {Number} a Multiplicando 1
 * @param {Number} b Multiplicando 2
 * @returns Resultado de la muliplicacion a*b
 */
function multiplica(a,b){
    return a*b;
}

//+++++++++++ Funcion expresada +++++++++++++
/**
 * Las funciones expresadas (function expressions)
 * son declaradas dentro de la asignacion de una variable.
 * 
 * Estas funciuones pueden ser anónimas (no tener nombre).
 * Las funciones expresadas no tiene histing
 */

/**
 * Sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
const suma = function (a,b){return a+b;}

console.log("El resultado de 56+4 ="+ suma(56,4));

//+++++++++++ Funciónes autoinvocadas +++++++++++++

/**
 * Las funciones autoinvocadaas (self-ivoking functions)
 * puede ser anonimas y se autoejecutan() en su declaracion (function)().
 */

(function (){
    console.log("=======================");
    console.log("Hola crayoli");
    console.log("=======================");
})();

//+++++++++++ Funciónes flecha +++++++++++++
/**
 * La funciones flecha (arrow functions) son funciones similares a las funciones declaradas, pero no requieren la palabra
 * "function" y si tienen una sola instruccion t es el retorno, no requiere la instruccion "return".
 */

/**
 * Realiza la operacion de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a,b)=>a-b;
console.log("La resta de 10-5 es = "+ resta(10,5));

//+++++++++++ Parámetros default +++++++++++++
/**
 * Funcion con parámetros inicializados
 */
function divide(a,b=1) {//para evitar que de NaN a B le damos el valor de 1 en la division.
    return a/b;
}
console.log("La vision de a/b  = " + divide(4));

//+++++++++++ Funciónes recursivas +++++++++++++
function factorial(num){
    if(num<=0) return 1;
    return (num*factorial(num-1));
}
console.log("Factorial      s de 3 = " + factorial(3));

//+++++++++++ Rest Parameters +++++++++++++
function sum(a,b, ...resto){
    let suma = a+b;
    resto.forEach( dato => {suma+=dato;});
    return suma;
}
console.log("El resultado de sumar varios numeros es: "+sum(2,3,5,1));