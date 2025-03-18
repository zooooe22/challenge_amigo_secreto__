
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Validar si el nombre ya existe en la lista
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos");
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigos() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agregar nombres primero");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigos);
});
