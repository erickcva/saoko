class Banda{//Iniciar clase siempre con mayusculas
    #creacion;
    #nombre;
    #nParticipantes;
    #pais;
    constructor(nombre,nParticipantes,pais) {//siempre lleva un constructor y lo que esta adentro son parametros
          //atributo=parametro
        this.#nombre=nombre;
        this.#nParticipantes=nParticipantes;
        this.#pais=pais;
        this.#creacion=new Date();
    }
/**
 * Texto con los datos participantes de la banda
 * @returns mensaje con datos principales
 */    
        imprimir(){
        return `Grupo: ${this.#nombre} de ${this.#nParticipantes} participantes del pais ${this.#pais}`
    }

//ENCAPSULAMIENTO, PARA OBTENER ACCESO A #creacion TENEMOS QUE USAR get
    get creacion(){ 
        return this.#creacion;
    }
    get nParticipantes(){ 
        return this.#nParticipantes;
    }
    //Set para poder modificar el atributo
    set nParticipantes(nuevoNumero){
        this.#nParticipantes=nuevoNumero;
    }
}

export {Banda};