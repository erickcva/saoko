console.log("JS07 asincronia");

console.log("01- Primera instruccion");

//SetTimeout(funcion Callback, tiempo_para ejecutar (ms))
//setTimeout( () => console.log('01.5 Holi crayoli'),3000)
const temporizador = (msj, retardo) => {
  setTimeout(() => console.log(msj), retardo);
};

const intervalo = (msj, tiempo) => {
  //Interval hara un ciclo cada tiempo indicado
  setInterval(() => console.log(msj), tiempo);
};

//temporizador('02- Segunda instruccion',5000);
//intervalo("Holi Crayoli",2000);

console.log("03- Tercera instruccion");

//------------------------------------------------------------------------------
// API Fetch.
console.log(`01-antes de la solicitud fetch`);

function solicitudFetch(userToFind) {
  fetch("https://reqres.in/api/users?delay=3")
    .then((response) => response.json())//Transforma JSON a objeto
    .then((conversion) => {
      //console.log(conversion);
      //buscando a Michael------------------------------
      //METODO 1
      /* console.log(conversion.data[0].first_name);
        console.log(conversion.data[0].email); */
      //METODO 2
      /* let {email, first_name} = conversion.data[0];
        console.log(first_name);
        console.log(email); */

      let encontrado = conversion.data.find(
        (data) => data.first_name === userToFind
      );
      console.log(encontrado); //Aqui esta el array con retardo
      const objUser = document.getElementById("user-name");
      const objEmail = document.getElementById("user-email");
      //Regresa los datos y los regresa a los valores de arriba por su ID
      objUser.value = encontrado.first_name;
      objEmail.value = encontrado.email;
      document.getElementById("user-email").value
      guardarLocalStorage();
      return "hola";
    })
    .then (msj => console.log('Retorno del then anterior: '+ msj))
    .catch (error=>{//Sirve para agarrar los errores que puedan tener los then
      //Procesando el error
      console.log(error)}); 
}
//-----------------------------------------
//Leer si el usuario ya esta en el local storage
function leerUsuario(usuario) {
  console.log("Usuario a buscar: "+usuario)
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.time>Date.now()) {
    leerLocalStorage();//Si esta en el local storage lo trae desde ahi
  }
  else{//Si no esta ahi hace la solicitud al servidor para traerlo
    solicitudFetch(usuario);
  }
}
//USAR LOCAL STORAGE
function guardarLocalStorage() {
  const objUser = document.getElementById("user-name");
  const objEmail = document.getElementById("user-email");

  let user = {
    //Array para guardar datos
    name: objUser.value,
    email: objEmail.value,
    time: Date.now()+60000 //leer el tiempo actual y sumarle 1 minuto
  };
  //localStorage.setItem('clave',valor)
  localStorage.setItem("name", objUser.value);
  localStorage.setItem("email", objEmail.value);
  //Para convertir un objeto a JSON: JSON.stringify(Objeto)
  localStorage.setItem("user", JSON.stringify(user)); //Objeto que contiene los datos guardados en arrray
}

//LEER LOCAL STORAGE STORAGE
function leerLocalStorage() {
  const objUser = document.getElementById("user-name");
  const objEmail = document.getElementById("user-email");

  //Convertit de JSON a objeto: JSON.parse(texto)
  const user= JSON.parse(localStorage.getItem("user"));
  console.log(user);
  console.log(typeof user);
  objUser.value = user.name;//Parte para regresar valores a los imputs obtenido de del nombre que le asignamos en el local para que las guardara en la linea 62
  objEmail.value = user.email;
}


//Promise------------------------------------------------------------
function miPromesa() {
  let promesa = new Promise((resolve,reject) => {
    const expresion = true;//Cualquier operacion
    if(expresion)resolve("La promesa éxitosa");//Puedo devolver cualquier tipo de dato
    else reject ("La promersa No se resolvio");
  });
  promesa
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally ( console.log("Se termino de ejecutar la promesa"));
}
miPromesa();

//------------------------------------------------------------------------
let division = (a,b) =>{
  return new Promise ((resolve,reject)=>{
    if (b!==0)resolve (a/b);
    else reject ("No se puede realizar una division entre cero");
  });
}

//then, catch para promesas asincronas-----------------------------------
/* division(4,0)
  .then (resultado => console.log("El resultado de la div= " +resultado))
  .catch(error=> console.log("error en la division: " + error));

division(4,2)
  .then (resultado => console.log("El resultado de la div= " +resultado))
  .catch(error=> console.log("error en la division: " + error));
 */

  //Async, await. para esperar resultado como promesa sincrona-----------
  async function operaciones(){
    //Los bloques try y catch nos sirven para el manejo de errores
    try{
    const resultado1 = await division(4,0);
    console.log("El resultado de la div es: "+resultado1);
  }
  catch(error){
    console.log("No se pudo realizar la division. "+ error);
  }

    try{
      const resultado2 = await division(4,2);
      console.log("El resultado de la div es: "+resultado2);
    }
    catch(error){
      console.log("No se pudo realizar la division. "+ error);
    }
  }
  operaciones();

  const ejemplo1=()=>Promise.resolve("A");
  function funcion1(){
    ejemplo1()
    .then(resultado => console.log(resultado) );
    console.log("B");

  }
  async function segunda(){
    console.log(await ejemplo1());
    console.log("B");
  }
  ejemplo1();
  segunda();