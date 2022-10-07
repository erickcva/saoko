import {Banda} from "./bandas.js"
class BandaEmo extends Banda {
    #nivelTristeza;
    constructor(nombre,nParticipantes,pais,nivelTristeza){
        super(nombre,nParticipantes,pais);//Donde van los atributos importados
        this.#nivelTristeza=nivelTristeza;
    }
    imprimir(){
        return `${super.imprimir()} con nivel de tristesa de ${this.#nivelTristeza}`
    }
}
export {BandaEmo};