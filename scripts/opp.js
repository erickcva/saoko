console.log("Sesion JS08 OPP");

const miArreglo = [5, 7, 3, 2];
const miArregloConstructor = new Array(5, 7, 3, 2);

console.log(miArreglo);
console.log(miArregloConstructor);
//propiedades de mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);
//Metodo del arreglo
console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());

//-------------------------------------------
let coraline = {
  nombre: "Coraline y la puerta secreta",
  duracion: 100,
  genero: ["Animación", "Misterio", "Fantasía"],
  clasificacion: "B15",
  actores: [
    //[{nombre: "", pais: ""},{},{}]
    {
      nombre: "Teri Hatcher",
      pais: "USA",
    },
    {
      nombre: "Jennifer Saunders",
      pais: "UK",
    },
    {
      nombre: "Dakota Fanning",
      pais: "USA",
    },
  ],
  director: {
    nombre: "Henry Selik",
    pais: "USA",
  },
  /*     mostrarActores: () => {
        coraline.actores.forEach((info) => 
            console.log(`Actor: ${info.nombre} del país ${info.pais}`)); */
//-----------------------------------------------------------------            
//Mostrar Actores con sus datos
  mostrarActores: function(){//funcion anonima ya que this no se puede usar en funcion flecha
    //La palabra reservada this hace referencia al objeto que lo invoque
    this.actores.forEach(info =>//Si no tuviera el this tendria que poner coraline.mostrarActores() pero con this ya se pueden cambiar los datos aunque se cambie el nombre de coraline.
      console.log(`${info.nombre} del pais ${info.pais}`)
    );
  },

//Mostrar el resto de informacion---------------------------------
mostrarTodaInfo: function(){
    console.log("===========================================");
    console.log(this.nombre);
    console.log("Duracion: " + this.duracion);
    this.genero.forEach( (info) =>{
      console.log(`Genero: ${info}`);
    });
    console.log("Clasificacion: " + this.clasificacion);
    console.log('Actores' );
    this.mostrarActores();
    console.log(`Director: ${this.director.nombre} del pais ${this.director.pais}` );
    console.log("===========================================");
  },
};

//Accediendo al nombre:
console.log("Pelicula: " + coraline.nombre);

console.log("Eres arreglo? " + Array.isArray(coraline.actores));

coraline.actores.forEach((info) => {
  //Iterar actores
  console.log(`Actor: ${info.nombre} del país ${info.pais}`);
});

//Mostrando el director:
console.log("Director: " + coraline.director.nombre);

//Cambiando la clasificacion
coraline.clasificacion = "C15";
console.log("Clasificacion: " + coraline.clasificacion);

//Agregando al actor Ian McShane de UK, Daw French de UK
coraline.actores.push({ nombre: "Ian McShane", pais: "UK" });
coraline.actores.push({ nombre: "Jennifer Saunders", pais: "UK" });
/* //Iteramos los actores
coraline.actores.forEach(info =>{//Iterar actores
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);
    
})
 */
coraline.mostrarTodaInfo();
