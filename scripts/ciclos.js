console.log("Sesion 304 Ciclos");
/**
 * la razon de por qué se recomienda declarar un arreglo u objeto con const, es para evitar que se cambie el tipo de dato
 */
let arrayLet = [1, 2, 3, 4];
const myArray = [10, 11, 12];
//arrayLet = "holi";
myArray.push("holi2"); //INDICE 3
myArray[myArray.length] = "Holi crayoli 3"; //INDICE 4
myArray[5] = "XD"; //INDICE 5

//console.log(arrayLet);image.png
myArray[3] = "Mel"; //se reemplaza indice 3 (holi2)

function reemplazar(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "Holi crayoli 3") myArray[i] = "Omar";
  }
  return myArray;
}
//opcion 2
//Rafa
function reemplazarR(myArray, stringToReplace, newString) {
  const index = myArray.indexOf(stringToReplace); // si no existe, retorna -1
  if (index > -1) myArray[index] = newString;
  return myArray;
}
console.log(reemplazarR(myArray, "xd456", "Rafa"));

//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
  return myA.includes(stringToReplace) //condicon ? true : false
    ? (myA[myA.indexOf(stringToReplace)] = newString) // myArray[i] = newData;
    : null;
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Erick"));
console.log(myArray);

//------------------------FIFO Y LIFO--------------------------
console.log("-----------FIFO Y LIFO---------");

/**
 * FIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E3   E2  E1
 * LIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E1   E2  E3
 */
//      1          2        3
const perecederos = ["manzanas", "quesos", "fresas"];

console.log("--------------FIFO-------------");
//Agregamos un elemento al inicio del arreglo:
perecederos.push("leche"); //Sera mi 4o elemento
console.log(perecederos);
//Sacamos el primer elemento del arreglo
console.log("Elemento eliminado: " + perecederos.shift());
console.log(perecederos);

console.log("--------------LIFO-------------");
const tienda = [...perecederos]; //Se clona el arreglo const tienda = perecederos.slice();
console.log(tienda);
//Agregamos un elemento al final de arreglo
tienda.push("El amor"); // sera mi 4o elemento
console.log(tienda);
//Sacamos el elemento del arreglo
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);

//-------------------duplicar arreglo--------------------
console.log("--------Duplicar un arreglo---------");
/**
 * Modificar el arreglo
 * [2,4,5,6]; x2 = [2,8,10,12]
 */

const arrayNumbers = [1, 2, 3, 4, 5];
function duplicar(array1) {
  let total = [...array1];
  for (let i = 0; i < array1.length; i++) {
    //array1[i]*=2; // array1[i] = array1[i] *2;
    //total.push(array1[i] * 2);
    total[i] *= 2;
  }
  return total;
}
const duplicated = arrayNumbers.map((num) => num * 2);

console.log("original " + arrayNumbers);
console.log(duplicar(arrayNumbers));
console.log(duplicated);


//--------------------------------------------------------
console.log("##### Calccular el factorial de un número ######");


//--------------------------------------------------------
//--------------------------------------------------------
console.log('/n ##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e"(3) tiene ######');
function countE(word) {
    const arrayOfChar = word.split("")
    const arrayOfLetterE =  arrayOfChar.filter((char) => char === "e")
    return arrayOfLetterE.length
  }
console.log(countE("Pepe Pecas Pica Papas pero"));

console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b));

//Contar caracteres------------------------------------------------
const contarCaracteres = (frase, character) => frase.split("").filter(elemento => elemento === character).length
console.log(contarCaracteres('holaaaaa','a'));

//Contar Caracteres con o si mayusculas----------------------------
console.log('Caracteres con o si mayusculas');
let contarCaracteres2 = (frase, character) => frase
    .toLowerCase()
    .split("")
    .filter(elemento => elemento === character)
    .length;
console.log(contarCaracteres2('holaAAaa','a'));

//------------------------------------------------------------------
console.log('------------match-----------');
/**
 * 
 * @param {*} busca 
 * @param {*} a 
 * @returns 
 */
let contarLetras = (a)=> (busca=a.match(/c/gi)) ? busca.length : 0;
console.log(contarLetras('comer comer comer'));


//------------------------------------------------------------------
console.log('-------------for------------');
for (let i = 0 ; i <= 10; ++i){
  console.log("El valor de la iteracion + 1 "+ (i*2));}


console.log('------for con continue y break------');
/**
 * La instruccion Break, rompe el ciclo for, no importa el n. de interacion en la que se encuentre.
 * La instruccion Continue, interrumpe la iteracion en curso y continua la siguiente iteracion.
 */
let ch18 = ['Abelardo','Audery','Angel','Sharon','Bren','Pato Lucas','Victor'];
/* for (let i = 0; i < ch18.length; i++) {
  if (ch18[i]==='Pato Lucas') {
    console.warn('Atencion, esta persona no pertenece a la CH18: '+ch18[i]);  
    break;
  }
  console.log('Persona de Ch18: '+ch18[i]);
} */

for (let i = 0; i < ch18.length; i++) {
  if(ch18[i]!=='Pato Lucas') continue;
    console.warn('Atencion, esta persona no pertenece a la CH18: '+ch18[i]);   
}

console.log('----------Matrices---------');
//const generation = [ [] , [] , [] ]
const generation=[
  ["Abelardo", "Audery", "Angel", "Sharon", "Bren", "El bromas", "Victor"],
  ["Yosceline", "Mariana", "Karen", "Pedro"],
  ["Emiliano", "Jonathan", "Esteban", "El bromas"]
];

//Iterar todos los elementos del arreglo
/* for(let i=0; i<generation.length;i++){
  console.log(`Los integrantes de la corte ${i+1} son: `)
  for(let j=0; j<generation[i].length;j++){
      console.log(generation[i][j]);
  }
} */


/* label:
for(let i=0; i<generation.length;i++){

  for(let j=0; j<generation[i].length;j++){

      continue label;
  }
}  */
//Encontrar a EL BROMAS en el arreglo
continua_buscando:
for (let i = 0; i < generation.length; i++) {
  for (let j = 0; j < generation[i].length; j++) {
    if(generation[i][j] === 'El bromas'){
      console.warn(`El bromas se encuentra en la corte ${i} en la posicion ${j} `);
      continue continua_buscando;
    }
    console.log(`Numero de itecaicon ${i}-${j}`);
  }
}

console.log('----------Ciclo While---------');
/**
 * Sintaxis:
 *          while (condicion){
 *                instruccion;
 *          }
 */

//encontrar el numero que pense
/* let findNumber=true;
let number = 1;
while(findNumber){
  if (confirm(`El numero es ${number}? `)){findNumber=false;
  alert(`Fantastico, tu numero es el ${number}`)
}
else if(number>=5) {
  findNumber=false;
  alert(`Humano ya vete, no sabes jugar`);
  }
  number++;
} */

//encontrar numero pero sin limite
/* let findNumber=true;
let number = 1;
while(findNumber){
  if (confirm(`El numero es ${number}? `)){findNumber=false;
  alert(`Fantastico, tu numero es el ${number}`);
  }
  number++;
}
 */
//-------------------------DO WHILE---------------------------------
console.log('----------Ciclo Do While---------');
/**
 * Sintanxis do-while
 *        do{
 *       
 *        } while (condicion));
 */

let bandera = false;
while(bandera){
  console.log('Mensaje dentro del ciclo while');
}
do {
  console.log('Mensaje dentro de do-while');
} while (bandera);

//Ejercicio 2
let contador=0;
do{
  console.log('Mensaje dentro de do-while')
} while (++contador<10);//Se imprime 10 veces


contador=3;
while(contador++<10){
  console.log('Valor de contador: '+ contador);
}
console.log('Valor final de contador: ' + contador);
//Se imprimio 7 veces y valor final de contador fue 11