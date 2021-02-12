import { Login, Usuario } from "./Usuario"

export default class LoginController {

    verificarLogin(login: Login): Usuario {
        let d = localStorage.getItem(login.email)
        let storedLogin: Usuario = {nome: ''}
        if (d) {
            storedLogin = JSON.parse(d);
        }
        if (storedLogin) {
            if (storedLogin.senha === login.senha) {
                return storedLogin
            } else {
                return {nome: 'login / senha inválida'}
            }

        } else {
            return {nome: 'login / senha inválida'}
        }
    }

}