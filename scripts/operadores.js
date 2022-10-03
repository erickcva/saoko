console.log('Sesión 305 Operadores');

//Operadores aritmeticos
//+ - * / % **
let suma = 3+4;
console.log('Valor de suma = '+suma);

//Operadores de asignación: 

let numero;
numero =10;
numero += 10; //numero = numero + 5;
numero -= 5;  //numero = numero -5;
numero = 12;

console.log('Valor de número = '+ (numero+=3)); //18
numero *= 2; //30
numero /= 3; //10 
numero %= 2; //0
numero **= 3; //0
console.log('Valor de número = '+ numero++); //0 por que el incremento lo hace despues de imprimir el numero
console.log('Valor de número = '+ ++numero); //2

//Operadores lógicos &&, ||, !
let ValorB = true && true;
ValorB = true && true || false && true && 'Hola';

console.log('Valor booleano '+ ValorB);