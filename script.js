let contactos = [];

const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", agregarContacto);

function agregarContacto() {

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();

    let mensaje = document.getElementById("mensaje");

    // Validaciones
    if (nombre === "" || telefono === "" || correo === "") {

        mensaje.innerText = "Complete todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    // Validar correo
    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {

        mensaje.innerText = "Correo inválido.";
        mensaje.style.color = "orange";
        return;
    }

    // Crear contacto
    let contacto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };

    // Guardar en arreglo
    contactos.push(contacto);

    // Mostrar mensaje
    mensaje.innerText = "Contacto agregado correctamente a la Agenda.";
    mensaje.style.color = "green";

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";

    // Actualizar lista
    mostrarContactos();
}
function eliminarContacto(index) {

    contactos.splice(index, 1);

    mostrarContactos();

    let mensaje = document.getElementById("mensaje");

    mensaje.innerText = "🗑️ Contacto eliminado correctamente.";
    mensaje.style.color = "blue";
}