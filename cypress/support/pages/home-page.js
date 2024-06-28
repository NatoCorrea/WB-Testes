///<reference types="cypress" />

let elemento_home = require('../elements/home-elements').ELEMENTOS
const { click, set } = require('../actions')

class Home{

    acessarHomePage(){
        cy.visit('/')
        set(elemento_home.popup.popup, '{esc}')
    
    }

    validarHomPage(){
        cy.url().should('contain', 'https://demo.wee.bet/')
    }

    acessarModalCadastro(){
        click(elemento_home.botao.registrar)
    }
    
    acessarModalLogin(){
        click(elemento_home.botao.entrar)
    }

    acessarMenu(indice){
        cy.get(elemento_home.botao.opcoesMenu).eq(indice).click()
    }

    validarPage(url){
        cy.url().should('contain', url)
    }

}
export default new Home()