// import { validarUsuario } from "./util";
const instance = axios.create({
    baseURL: 'https://api-transactions-back-end.vercel.app',
});
const btnLogin = document.getElementById('_signIn');

btnLogin.addEventListener('click', () => {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    instance
        .get('/')
        .then((result) => {
            let database = result.data.employeesGrowBank;

            // console.log(database);

            logIn(username, password, database);
        })
        .catch((error) => {
            console.error(error);
        });
});

function validarUsuario(username, database) {
    for (const user of database) {
        if (user.username == username) {
            return true;
        }
    }
    return false;
}

function pegarUsuario(username, database) {
    for (const user of database) {
        if (user.username == username) {
            return user;
        }
    }
    return false;
}

function validarSenha(user, password) {
    if (user.password == password) {
        return true;
    }
    return false;
}

function logIn(username, password, database) {
    if (!validarUsuario(username, database)) {
        return Swal.fire({
            icon: 'error',
            title: 'Erro :(',
            text: `O usuário ${username} não foi encontrado`,
        });
    }

    let user = pegarUsuario(username, database);

    if (!validarSenha(user, password)) {
        return Swal.fire({
            icon: 'error',
            title: 'Erro :(',
            text: `A senha  ${password} não está correta`,
        });
    }

    window.location.href = 'cadastros.html';
}
