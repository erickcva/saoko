console.log("Sesion JS03 Condicionales");


//--------------------------Declaracion de bloque---------------------------
let nombre= "Rafa";
let ciudad= "Guadalajara"
{   
    let nombre= "Fer";
    let ciudad = "CDMX";
    let apellido = "Palapa"
    console.log(`Mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}`);
}
console.log(`Mi nombre es ${nombre}y vivo en ${ciudad}`);



//--------------------------Condicional IF---------------------------
console.log("--------------Condicional IF-------------");
/**
 * Sintaxis:
 *          if(condicionVerdadera) Intruccion;
 * 
 *          if(condicionVerdadera) {
 *              instrucciones;
 *          }
 */
let edad =25;
console.log("***Declaracion antes del if-->")
if (edad>24) console.log("La edad es mayor a 25");
else{
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}
console.log("<---Declaracion antes del if***")



//-------------------------Operador ternario---------------------------
console.log("------------Operador ternario------------");
//sintaxis:      condicion? condicion_verdadera : condicion_falsa;
console.log(`la edad es ${edad>24? "mayor":"menor"} a 25`);
console.log(`la edad es ${edad===25? "es igual": (edad>24?"mayor":"menor")} a 25`);

//uso externo del operador ternario
let comparacion = edad===25? "es igual": edad>24?"mayor":"menor";
console.log(`la edad `+comparacion);


//------------------- Conicional if, else if, else ---------------
console.log("------condicionales if, else if, else------");
/**
 *    Sintaxis:
 *          if( condicionVerdadera ) {
 *               instrucciones;
 *            }
 *          else if (OtraCondicion) {
 *            }
 * *        else if (OtraCondicion) {
 *            }
 *          else {
 *              Instrucciones;
 *            }              
 */
edad=25;
 if (edad>25) { console.log("La edad es mayor a 25");
} else if (edad===25){ console.log("La edad es igual a 25");
} else console.log("La edad es menor a 25");


compara=0;
if (edad===25) compara = "igual";
else if (edad>25) compara = "mayor"
else compara = "menor";

console.log(`La edad es ${compara} a 25`);

//REDUCIDO
console.log(`la edad es ${edad===25? "igual": (edad>24?"mayor":"menor")} a 25`);

//------------------- Condicional switch ---------------
console.log("------------SWITCH-------------");
/**
 * Sintaxis:
 *        switch(expresion){
 *            case valor1:
 *                  instrucciones;
 *                  break;
 *            case valor2:
 *                  instrucciones;
 *                  break;
 *            case valor3:
 *                  instrucciones;
 *                  break;
 *           defaul:
 *                  instrucciones;
 *       }
 */
edad = 30;
comparacion="";

switch(edad){
    case 25:
        comparacion="igual"
        break;
    case 24:
        comparacion="menor"
        break;
    case 26:
        comparacion="mayor"
        break;
    default:
        comparacion="*No se puede saber*";
}
console.log(`La edad es ${comparacion} a 25`);


//ejemplo 2 switch
let numeroMes = 12;
let estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    estacion = "Invierno";
    break;
  case 1:
    mes = "Enero";
    estacion = "Invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion = "Primavera";
    break;
  case 4:
    mes = "Abril";
    estacion = "Primavera";
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion = "Verano";
    break;
  case 7:
    mes = "Julio";
    estacion = "Verano";
    break;
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
    estacion = "Otoño";
    break;
  case 10:
    mes = "Octubre";
    estacion = "Otoño";
    break;
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

//EJEMLO 3 switch
let valor = Math.sign(25 - edad);

switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`)


//-------------------------- &&--------------------------
console.log("------------&&-------------");


num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op=( num1 < num2||num2 < num3) && (!(num1 && num5 != num3));
console.log(op);

//-------------------------- &&--------------------------
console.log("------------&&-------------");
let online = true;
let active = true;
if(active){
  console.log("James");
}
online && active && console.log('James');


