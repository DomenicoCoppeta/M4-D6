// Impostazioni per la richiesta
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// URL dell'API degli utenti
const usersLink = 'https://jsonplaceholder.typicode.com/users';

// Array per conservare gli utenti
let users = [];

// Funzione asincrona per ottenere gli utenti dalla richiesta API
async function getUsers() {
    try {
        const response = await fetch(usersLink, requestOptions);
        users = await response.json();
        showUsers(users);
    } catch (error) {
        console.error("Errore: " + error.message);
    }
}

// Funzione per mostrare gli utenti nella tabella
async function showUsers(data) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    data.forEach((user) => {
        tbody.innerHTML +=
            /*html*/
            `
            <tr>
                <th scope="col-1">${user.id}</th>
                <td scope="col-3">${user.email}</td>
                <td scope="col-2">${user.username}</td>
                <td scope="col-2">${user.name}</td>
            </tr>
            `;
    });
}

// Alla finestra caricata, ottieni gli utenti
window.onload = getUsers;

// Elementi del filtro
const dropdown = document.getElementById("dropdown");
const textInput = document.getElementById('textInput');

// Aggiungi gestori di eventi per il cambio nel dropdown e l'input di testo
dropdown.addEventListener("change", filteredUsers);
textInput.addEventListener("input", filteredUsers);

// Funzione per filtrare gli utenti in base al campo e al testo inserito
function filteredUsers() {
    const field = dropdown.value;
    const textFilter = textInput.value.toLowerCase();
    const filteredUsers = users.filter(user => {
        switch (field) {
            case "all":
                return user.email.toLowerCase().includes(textFilter) || user.username.toLowerCase().includes(textFilter) || user.name.toLowerCase().includes(textFilter);
            case "email":
                return user.email.toLowerCase().includes(textFilter);
            case "username":
                return user.username.toLowerCase().includes(textFilter);
            case "name":
                return user.name.toLowerCase().includes(textFilter);
            default:
                return false;
        }
    });
    showUsers(filteredUsers);
}
