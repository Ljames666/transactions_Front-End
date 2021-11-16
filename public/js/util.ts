import Swal from "sweetalert2";

// insterfaces
interface database {
    id: number;
    username: string;
    password: string;
}

// funções
function validarUsuario(username: string, password: string, database: Array<database>) {
    for (const user of database) {
        if (user.username == username) {
            if (user.password != password) {
                Swal.fire({
                    title: "Erro!",
                    text: "Senha incorreta",
                    icon: "error",
                    confirmButtonText: "Tentar novamente",
                });
            }
        }
    }
}
