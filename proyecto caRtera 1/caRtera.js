function login() {
    var numeroCelular = document.getElementById("numero-celular-usuario").value
    var clave = document.getElementById("clave").value

    if (numeroCelular === "" || clave === "") {
        alert("Por favor, complete todos los campos.")
        return
    }

    // Aquí podrías agregar más validaciones, como formato de número de celular, longitud de la contraseña, etc.

    // Si pasa todas las validaciones, redirigir a la página de perfil
    window.location.href = "usuario.html"
}
function register() {
    // Redirige a la página de registro
    window.location.href = 'registros.html'
}
async function createUser() {
    const user = {
        nombre: "Juan",
        celular: "123456789",
        saldo: 1000.0
    };

    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const newUser = await response.json();
        console.log('User created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Ejemplo de contactos
const contacts = [
    { id: 1, name: 'Juan Perez' },
    { id: 2, name: 'Ana Garcia' },
    { id: 3, name: 'Carlos Lopez' },
];

// Cargar contactos al iniciar la página
window.onload = function() {
    loadContacts();
};

function loadContacts() {
    const contactList = document.getElementById('contactList');
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = contact.name;
        li.onclick = () => selectContact(contact);
        contactList.appendChild(li);
    });
}

let selectedContact = null;

function selectContact(contact) {
    selectedContact = contact;
    document.getElementById('chatBody').innerHTML = ''; // Limpiar chat previo
    // Puedes agregar lógica para cargar mensajes previos con el contacto seleccionado
}

function sendMessage() {
    if (!selectedContact) {
        alert('Por favor selecciona un contacto');
        return;
    }

    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value;
    if (message.trim() === '') {
        return;
    }

    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `Yo: ${message}`;
    chatBody.appendChild(messageDiv);

    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Aquí puedes agregar lógica para enviar el mensaje al servidor o manejarlo de otra manera
}

// Función para redirigir a la interfaz de envío
function redirectToEnvio() {
    window.location.href = "enviar.html"; // Cambia "interfaz.html" por la ruta correcta de tu archivo HTML de la interfaz de envío
}

// Agrega este código al final de tu archivo caRtera.js o cualquier otro archivo JavaScript que estés utilizando en tu página de usuario

// Agrega un event listener al botón de enviar en la página de usuario para redirigir al usuario a la interfaz de envío al hacer clic
document.querySelector(".enviar").addEventListener("click", function() {
    redirectToEnvio();
});
