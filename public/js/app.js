//capturar formularios
const formPasajeros = document.getElementById("formPasajeros");
const formCarga = document.getElementById("formCarga");
const mensaje = document.getElementById("mensaje");
const mensajeCarga = document.getElementById("mensajeCarga");
const reservasCarga = document.getElementById("reservasCarga");
const listaReservas = document.getElementById("listaReservas")

//Validacion de pasajeros
if (formPasajeros) {
formPasajeros.addEventListener("submit", (e) => {
    e.preventDefault(); 
    //evita que recargue la pagina
    const nombre = document.getElementById("nombre").value;
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const numeroTelefono = document.getElementById("numeroTelefono").value;

    if (!nombre || !fecha || !destino || !numeroTelefono) {
        alert("Por favor llena todos los campos.");
        return;
    }
 
    const reserva = {
        nombre: nombre, fecha: new Date().toLocaleDateString()
    };

    //guardar en localStorage
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    formPasajeros.reset(); //lipia el formulario
    mostrarReservas(); //actualiza la lista

    mensaje.textContent = "Reserva de pasajero registrada con éxito ✅" ;
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
});
}

//validacion de carga
if (formCarga) {
formCarga.addEventListener("submit", (e) => {
    e.preventDefault();
    //evita que recargue la pagina
    const nombreCarga = document.getElementById("nombreCarga").value;
    const fechaCarga = document.getElementById("fechaCarga").value;
    const horaCarga = document.getElementById("horaCarga").value;
    const tamaño = document.getElementById("tamaño").value;
    const direccionCarga = document.getElementById("direccionCarga").value;
    const numeroContacto = document.getElementById("numeroContacto").value;

    if (!nombreCarga || !fechaCarga || !horaCarga || !tamaño || !direccionCarga || !numeroContacto) {
        alert ("Por favor llena todos los campos.");
        return;
    }

    const Carga = {
        nombreCarga: nombreCarga,
        fechaCarga: new Date().toLocaleDateString(),
        horaCarga: new Date().toLocaleTimeString(),
        tamaño: tamaño,
        direccionCarga: direccionCarga,
        numeroContacto: numeroContacto
    };

    //guardar en localStorage
    let reservasC = JSON.parse(localStorage.getItem("reservasC")) || [];
    reservasC.push(Carga);
    localStorage.setItem("reservasC", JSON.stringify(reservasC));

    formCarga.reset(); //limpia el formulario
    mostrarReservasCarga(); //actualiza la lista

    mensajeCarga.textContent = "Solicitud de carga registrada con éxito 🚚" ;
    mensajeCarga.style.color = "green";
    mensajeCarga.style.fontWeight = "bold";
});
}

//Mostrar las reservas de carga
function mostrarReservasCarga() {
    const listaCarga = document.getElementById("reservasCarga");
    if (!listaCarga) return;
    listaCarga.innerHTML = "";
    listaCarga.style.color = "white";

    let reservasC = JSON.parse(localStorage.getItem("reservasC")) || [];
    reservasC.forEach(element => {
        const li = document.createElement("li");
        li.textContent = `${element.nombreCarga} - ${element.fechaCarga} ${element.horaCarga}`;
        listaCarga.appendChild(li);
    });
}

//Mostrar las reservas pasajeros
function mostrarReservas() {
    const lista = document.getElementById("listaReservas");
    if (!lista) return;
    lista.innerHTML = "";
    lista.style.color = "white";

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.forEach(element => {
        const li = document.createElement("li");
        li.textContent = `${element.nombre} - ${element.fecha}`;
        lista.appendChild(li);
    });
}

mostrarReservas();
mostrarReservasCarga();