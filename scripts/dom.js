console.log('Sesion 306 Dom');

//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClassName();
encontrarPorSelector();
crearElemento();
cambiarEstilo();


function encontrarPorId() {
    //Obtenemos el objeto a través de su ID
    const element = document.getElementById('titulo-h1');
    console.log('Datos del elemento'+ element.innerHTML);

    //cambiamos los datos en el objeto
    element.innerHTML = `El <em class="color">texto</em> en el título es: ${element.innerHTML}`;
}

function encontrarPorTagName() {
        // Obtenemos los elementos que cumplan con lo indicado
        //getElementByTagName() Entrega una coleccion con los objetos encontrados
        let elements = document.getElementsByTagName("p");
        console.log("Elementos encontrados: "+ elements.length);

        //Obtenemos el elemento del indice 1
        let parrafo = elements[1].innerHTML;
        console.log('Contenido en p[1]' + parrafo);
        console.log("Contenido en p[1] usando innerText: " +elements[1].innerText);
        //innerHTML nos entrega el objeto con sus elementos anidados
        //innerText nos entrega el texto del objeto, sin elementos anidados, y sin dobles espacios.
}
function encontrarPorClassName() {
        const elements =document.getElementsByClassName('color');
        console.log('Elementos encontrados: '+elements.length);
        elements[0].innerHTML= 'Reacciones Pro';
}

function encontrarPorSelector() {
        const elements =document.querySelectorAll('h3>.color');
        console.log("Elementos encontrados: " +elements.length);
        elements[0].innerHTML= 'ganas de comprar';
}

function cambiarEstilo(){
    const elements = document.querySelectorAll('p>.color');
    elements[0].style.color='red';
    elements[1].style.color='green';
}

function crearElemento() {
   const nuevoElemento = document.createElement('p');
   nuevoElemento.innerHTML = `Este es un nuevo <strong class="color">parrafo</strong> creado con createElement.`;
   document.getElementById('titulo').appendChild(nuevoElemento);
}