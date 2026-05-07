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
function mostrarContactos() {

    let contenedor = document.getElementById("contactos");

    contenedor.innerHTML = "";

    contactos.forEach((contacto, index) => {

        contenedor.innerHTML += `
        
        <div class="contacto">

            <p><strong> Nombre:</strong> ${contacto.nombre}</p>

            <p><strong> Teléfono:</strong> ${contacto.telefono}</p>

            <p><strong> Correo:</strong> ${contacto.correo}</p>

            <button class="btnEliminar" onclick="eliminarContacto(${index})">
                Eliminar
            </button>

        </div>
        `;
    });
}
