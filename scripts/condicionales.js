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
//sintaxis:      condicion?
console.log(`la edad es ${edad>24? "mayor":"menor"} a 25`);
console.log(`la edad es ${edad===25? "es igual": (edad>24?"mayor":"menor")} a 25`);

