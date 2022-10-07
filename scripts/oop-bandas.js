import {Banda} from "./bandas.js"
import {BandaEmo} from "./bandas-emo.js"

console.log("JS08");
const elRecodo = new Banda("El Recodo",50,"México");
console.log(elRecodo.imprimir());

const mS = new Banda("MS",200,"México");
console.log(mS.imprimir());

const pXNDX = new Banda("PXNDX",4,"México");
console.log(pXNDX.imprimir());

//---------Verificar fecha de creacion----------
console.log(`Fecha de creacion del ${elRecodo.nombre} fue el ${elRecodo.creacion}`);
console.log(`Fecha de creacion del ${pXNDX.nombre} fue el ${pXNDX.creacion}`);
/* pXNDX.creacion="sepa tu";
pXNDX.nuevoAtributo="Nuevos datos";
console.log(`Fecha de creacion del ${pXNDX.nombre} fue el ${pXNDX.creacion}`); */
elRecodo.nParticipantes+=1;
console.log(elRecodo.imprimir());

//Instanciar una banda Emo
const paramore= new BandaEmo("Paramore",3,"USA",3.5);
console.log(paramore.imprimir());//toma los dos imprimir, primero el de bandas y despues del archivo bandas emo.



//Usando polimorfismo-->
muestraDatos(elRecodo);
muestraDatos(paramore);
muestraDatos("La banda me dice que todo lo que hago esta mal");


function muestraDatos(objBanda) {
    let esTipoBanda = objBanda instanceof Banda;
    console.log("El dato es del tipo Banda (o heredado): " + esTipoBanda);
    if(esTipoBanda){
    console.log("===Atencion, toquin de ===");
    console.log(objBanda.imprimir());
    console.log("=== No te lo pierdas ===");
    }
}


