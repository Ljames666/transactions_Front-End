"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sweetalert2_1 = __importDefault(require("sweetalert2"));
// funções
function validarUsuario(username, password, database) {
    for (const user of database) {
        if (user.username == username) {
            if (user.password != password) {
                sweetalert2_1.default.fire({
                    title: "Erro!",
                    text: "Senha incorreta",
                    icon: "error",
                    confirmButtonText: "Tentar novamente",
                });
            }
        }
    }
}
