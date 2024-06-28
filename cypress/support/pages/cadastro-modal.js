///<reference types="cypress"/>

let elemento_cadastro = require('../elements/cadastro-elements').ELEMENTOS

const { click, set, scrollTo, get_text } = require('../actions')

class Cadastro{

    validarModalCadastro(){
        cy.get(elemento_cadastro.logoMarca.logo).should('exist').and('be.visible')
        cy.get(elemento_cadastro.campo.cpf).should('exist').and('be.visible')
        cy.get(elemento_cadastro.campo.senha).should('exist').and('be.visible')  
    }

    preencherCPF(cpf){
        set(elemento_cadastro.campo.cpf, cpf)
    }

    preencherNome(nome){
        set(elemento_cadastro.campo.nome, nome)

    }

    preencherDataNascimento(dataNascimento){
        set(elemento_cadastro.campo.dataNascimento, dataNascimento)

    }

    preencherEmail(email){
        set(elemento_cadastro.campo.email, email)
    }

    preencherTelefone(telefone){
        set(elemento_cadastro.campo.telefone, telefone)
    }

    preencherSenha(senha){
        set(elemento_cadastro.campo.senha, senha)    
    }

    preencherConfirmarSenha(confirmarSenha){
       set(elemento_cadastro.campo.confirmarSenha, confirmarSenha)     
    }

    clicarCadastrar(){
        click(elemento_cadastro.botao.cadastrar)
    }

    clicarElemento(elemento){
        click(elemento)
    }

    validarMessagemErro(mensagem) {
        // cy.get(elemento_cadastro.mensagem.erro).then((elemento) => {
        //     expect(elemento.text()).contains(mensagem)
        // })
        get_text(elemento_cadastro.mensagem.erro).should('contain.text', mensagem)
    }

}
export default new Cadastro()