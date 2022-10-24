//COTIZADOR DE VIDEOS DE ANIMACIÓN


//VARIABLES


let tipoPersonajes;
let precioPersonajes;

let tipoEscenarios;
let cantidadEscenarios;
let precioEscenarios

let tipoAnimacion;
let cantidadMinutos;
let precioAnimacion;

let precioTotal;
let listadoPrecioPersonajes = []

//PERSONAJES

//Función para construir personajes


let listaPersonajes = [];
//let cantidadPersonajes = parseInt(prompt("¿Cuántos personajes tiene tu video?"));

const crearPersonaje =() => {

    
    //Variables usadas en la función
    const formularioPersonajes = document.getElementById("formularioPersonajes");
    let nombre = document.getElementById("nombre").value;
    let formaAntropomorfica = parseInt(document.getElementById("formaAntropomorfica").value);
    let extremidades = parseInt(document.getElementById("extremidades").value);
    let peloLargo = parseInt(document.getElementById("peloLargo").value);
    let expresionesComplejas = parseInt(document.getElementById("expresionesComplejas").value);


    //Objeto constructor de personajes
    class Personaje {
        constructor(nombre, formaAntropomorfica, extremidades, peloLargo, expresionesComplejas) {
            this.nombre = nombre;
            this.formaAntropomorfica = formaAntropomorfica;
            this.extremidades = extremidades;
            this.peloLargo = peloLargo;
            this.expresionesComplejas = expresionesComplejas;
            this.precioBase = 50;
        }
    }
    
    const personaje = new Personaje  (nombre, formaAntropomorfica, extremidades, peloLargo, expresionesComplejas);

    //push del objeto creado al array de personajes
    listaPersonajes.push(personaje);
    console.log(personaje);

    let precioPersonaje = personaje.formaAntropomorfica + personaje.extremidades + personaje.peloLargo + personaje.expresionesComplejas + personaje.precioBase
    listadoPrecioPersonajes.push(precioPersonaje)
    console.log (`el precio de ${personaje.nombre} es ${precioPersonaje} USD`)
    console.log(listadoPrecioPersonajes)

    let espacioPersonajes = document.getElementById("espacioPersonajes");
    
    espacioPersonajes.innerHTML +=`
        <p>El personaje <strong>${nombre}</strong> tiene un valor de <strong> $${precioPersonaje}USD</strong> </p>
    `;

    const listaPersonajesJSON = JSON.stringify(listaPersonajes);
    localStorage.setItem("listaPersonajes", listaPersonajesJSON);

    formularioPersonajes.reset()
    return personaje; 
}


//ESCENARIOS 
const crearEscenarios =() => {

    tipoEscenarios = document.getElementById("tipoEscenarios").value;
    cantidadEscenarios = document.getElementById("cantidadEscenarios").value;

    precioEscenarios = tipoEscenarios * cantidadEscenarios

    console.log (`El valor total de los escenarios de tu video es $${precioEscenarios}USD`);

    let espacioEscenarios = document.getElementById("espacioEscenarios");
    espacioEscenarios.innerHTML =`
        <p>Los escenarios tienen un valor de <strong> $${precioEscenarios}USD</strong> </p>
    `;

    let botonEscenarios = document.getElementById("botonEscenarios");
    botonEscenarios.disabled = true;
}


//TIPO DE ANIMACIÓN

const calcularMinutos =() => {

    tipoAnimacion = document.getElementById("tipoAnimacion").value;
    cantidadMinutos = document.getElementById("cantidadMinutos").value;

    precioAnimacion = tipoAnimacion * cantidadMinutos

    let espacioMinutos = document.getElementById("espacioMinutos");
    espacioMinutos.innerHTML =`
        <p>El valor de los ${cantidadMinutos} minutos con las características indicadas es de <strong>$${precioAnimacion}USD<strong></p>
    `;

    let botonMinutos = document.getElementById("botonMinutos");
    botonMinutos.disabled = true;

    if (cantidadMinutos >= 3 && cantidadMinutos <=4) {
        precioAnimacion = precioAnimacion * 0.8
        console.log (`Tienes un descuento del 20% en la animación`)
        espacioMinutos.innerHTML +=`
        <p>Por ser ${cantidadMinutos} minutos tienes un descuento del 20%. El valor de la animación es de <strong>$${precioAnimacion}USD<strong></p>
    `;
    } else if (cantidadMinutos >= 5) {
        precioAnimacion = precioAnimacion * 0.7
        console.log (`Tienes un descuento del 30% en la animación`)
        espacioMinutos.innerHTML +=`
        <p>Por ser ${cantidadMinutos} minutos tienes un descuento del 30%. El valor de la animación es de <strong>$${precioAnimacion}USD<strong></p>
    `;
    } else (precioAnimacion);

    console.log (`El valor de la animación con las carácteristicas indicadas es de $${precioAnimacion}USD`);

}

//COTIZAR

const cotizar = () =>{

    //console.log(listadoPrecioPersonajes);

    let precioTotalPersonajes = 0;

    for (let i = 0; i < listadoPrecioPersonajes.length; i++) {
        precioTotalPersonajes += listadoPrecioPersonajes[i]
        console.log(precioTotalPersonajes)
    }

    //console.log(`El precio total de los personajes es ${precioTotalPersonajes}`);

    precioTotal = precioAnimacion + precioEscenarios + precioTotalPersonajes

    let espacioCotizacionFinal = document.getElementById("espacioCotizacionFinal");
    if (precioTotal>0){espacioCotizacionFinal.innerHTML =`
    <p>El precio total de tu video es <strong> ${precioTotal}</strong> </p>
`;
    } else {espacioCotizacionFinal.innerHTML =`
    <p>Primero llena todos los campos y luego presiona cotizar</p>
`
    }

    
    

    console.log (`El valor total del video es $${precioTotal}USD`);
    localStorage.setItem("cotizacionAnterior", precioTotal)

}

const recuperarCotizacion = ()=>{

    let cotizacionAnterior = parseInt(localStorage.getItem("cotizacionAnterior"))
    let espacioCotizacionRecuperada = document.getElementById("espacioCotizacionRecuperada");

    if (cotizacionAnterior>0) {espacioCotizacionRecuperada.innerHTML =`
    <p>La cotización anterior tiene un valor de ${cotizacionAnterior}USD
    `

    } else (espacioCotizacionRecuperada.innerHTML = `
    <p>Aún no tienes cotizaciones</p>
    `)
}






