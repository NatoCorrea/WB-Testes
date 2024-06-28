///<reference types="cypress" />

let elemento_login = require('../elements/login-elements').ELEMENTOS
let elemento_home = require('../elements/home-elements').ELEMENTOS

const {click, set, get_text } = require('../actions')

class Login{

    validarModalLogin(){
        cy.get(elemento_login.logoMarca.logo).should('exist').and('be.visible')
        cy.get(elemento_login.campo.nome).should('exist').and('be.visible')
        cy.get(elemento_login.campo.senha).should('exist').and('be.visible')
    }

    preencherEmailLogin(nome){
        set(elemento_login.campo.nome, nome)
    }

    preencherEmailRecuperarSenha(email){
        cy.get(elemento_login.campo.recuperarSenha)
            .type(email)
    }

    preencherSenha(senha){
        set(elemento_login.campo.senha, senha)
    }

    clicarElemento(elemento){
        click(elemento)
    }

    validarLogin(){
        cy.get(elemento_home.botao.depositar).should('exist').and('be.visible')
        cy.get(elemento_home.botao.perfil).should('exist').and('be.visible')
    }

    validarMensagem(mensagem){
        get_text(elemento_login.mensagem.retorno).should('contain.text', mensagem)      
    }

    validarModalRecuperarSenha(mensagem){
        get_text(elemento_login.mensagem.titulo).should('contain.text', mensagem)
    }

}
export default new Login()