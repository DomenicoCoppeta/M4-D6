// const requestOptions = { method: 'GET', redirect: 'follow' };
// const usersLink = 'https://jsonplaceholder.typicode.com/users'

// let totalUsers =  [];
// let visibleUsers = [];

// async function getUsers() {
// try {
//   const response = await fetch(usersLink, requestOptions);
//   const users = await response.json()
//   const displayUsers = await showUsers(users)
// } catch (error) {
//   console.error("Errore" + error.message);
// }
// }

// async function showUsers(data) {
//       data.map((user) =>{
//       document.querySelector('tbody').innerHTML += 
//       /*html*/
//       `
//       <tr>
//           <th scope="row">${user.id}</th>
//           <td scope="col">${user.email}</td>
//           <td scope="col">${user.name}</td>
//           <td scope="col">${user.username}</td>
//       </tr>
//       `
//   })
// }

// window.onload = getUsers();
 
// const dropdown = document.getElementById("dropdown");
// const textInput = document.getElementById('textInput');
// dropdown.addEventListener("change", filteredUsers);
// textInput.addEventListener("input", filteredUsers);

// function filteredUsers() {
//   const field = dropdown.value;
//   const textFilter = textInput.value.toLowerCase();
//   const filteredUsers =  users.filter(user => {
//     if (field === "all") {
//     return user.email.toLowerCase().includes(textFilter) || user.username.toLowerCase().includes(textFilter) || user.name.toLowerCase().includes(textFilter);
//   } else if (field === "email") {
//     return user.email.toLowerCase().includes(textFilter);
//   } else if (field === "username") {
//     return user.username.toLowerCase().includes(textFilter);
//   } else if (field === "name") {
//     return user.name.toLowerCase().includes(textFilter);
//   }
//   return false;
//   });
//   showUsers(filteredUsers);
// }

const requestOptions = { method: 'GET', redirect: 'follow' };
    const usersLink = 'https://jsonplaceholder.typicode.com/users';

    let totalUsers = [];
    let visibleUsers = [];

    async function getUsers() {
        try {
            const response = await fetch(usersLink, requestOptions);
            totalUsers = await response.json();
            showUsers(totalUsers);
        } catch (error) {
            console.error("Errore" + error.message);
        }
    }

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

    window.onload = getUsers;

    const dropdown = document.getElementById("dropdown");
    const textInput = document.getElementById('textInput');
    dropdown.addEventListener("change", filteredUsers);
    textInput.addEventListener("input", filteredUsers);

    function filteredUsers() {
        const field = dropdown.value;
        const textFilter = textInput.value.toLowerCase();
        const filteredUsers = totalUsers.filter(user => {
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





