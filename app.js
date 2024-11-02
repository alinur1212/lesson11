const api_url = 'https://6722fc892108960b9cc64dc2.mockapi.io/crud/api/v1/users';

const userDiv = document.querySelector('.users');


async function getUsers() {
    const response = await fetch(api_url);
    const userData = await response.json();
    renderUserCard(userData);
}


getUsers();


function renderUserCard(arr = []) {
    userDiv.innerHTML = arr.map(user => {
        return `
        <div class="card">
            <img src="${user.avatar}" alt="user photo">
            <h3>${user.id} ${user.name} 
                <button onclick="removeUser(${user.id})">delete</button>
            </h3>
        </div>`;
    }).join('');
}


async function removeUser(id) {
    const response = await fetch(`${api_url}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert(`${id}`);

        getUsers();
    } 
}