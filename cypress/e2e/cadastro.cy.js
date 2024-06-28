/// <reference types="cypress" />


import cadastro from '../support/pages/cadastro-modal'
import home from '../support/pages/home-page'

const elemento_cadastro = require('../support/elements/cadastro-elements').ELEMENTOS
const DADOS = require('../fixtures/dados-cadastro.json')


describe('Validações na pagina de cadastro', () => {
    
    beforeEach(()=> {
        home.acessarHomePage()
        home.acessarModalCadastro()
        
        cadastro.validarModalCadastro()
        
    })
    it('Realizar cadastro com dados validos sem verificação de CPF', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)
    })

    // it('Realizar cadastro com dados validos com verificação de CPF', () => {
    //     cadastro.preencherCPF(DADOS.validos.CPF)
    //     cadastro.preencherEmail(DADOS.validos.email)
    //     cadastro.preencherTelefone(DADOS.validos.telefone)
    //     cadastro.preencherSenha(DADOS.validos.senha)
    //     cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)
    // })

    it('Realizar cadastro com CPF invalido', () => {
        cadastro.preencherCPF(DADOS.invalidos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('CPF Inválido!')
    
    })

    it('Realizar cadastro com CPF vazio', () => {
        cadastro.preencherCPF(DADOS.invalidos.vazio)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('CPF obrigatório.')
    })
    
    it('Realizar cadastro com nome invalido', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.invalidos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha) 

        cadastro.validarMessagemErro('Nome precisa ter no mínimo 3 caracteres.')
    })

    it('Realizar cadastro com nome vazio', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.clicarElemento(elemento_cadastro.campo.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha) 

        cadastro.validarMessagemErro('Nome obrigatório.')
    })

    it('Realizar cadastro com data de nascimento vazio', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.clicarElemento(elemento_cadastro.campo.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('Data de nascimento obrigatório.')
    })   
    
    it('Realizar cadastro de menor de idade', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.invalidos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('Cadastro permitido apenas para maiores de 18 anos.')
    })
    
    it('Realizar cadastro com email invalido', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.invalidos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('Email Inválido!')
    })

    it('Realizar cadastro com email vazio', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.clicarElemento(elemento_cadastro.campo.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('E-mail obrigatório.')
    })

    it('Realizar cadastro com senha menor que 6 digitos', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.invalidos.senhaMenor)
        cadastro.preencherConfirmarSenha(DADOS.validos.confirmarSenha)

        cadastro.validarMessagemErro('Senha precisa ter no mínimo 6 caracteres.')  
    })

    it('Realizar cadastro com senha divergentes', () => {
        cadastro.preencherCPF(DADOS.validos.CPF)
        cadastro.preencherNome(DADOS.validos.nome)
        cadastro.preencherDataNascimento(DADOS.validos.dataNascimento)
        cadastro.preencherEmail(DADOS.validos.email)
        cadastro.preencherTelefone(DADOS.validos.telefone)
        cadastro.preencherSenha(DADOS.validos.senha)
        cadastro.preencherConfirmarSenha(DADOS.invalidos.confirmarSenha)
        cadastro.clicarElemento(elemento_cadastro.campo.senha)

        cadastro.validarMessagemErro('Campos não são iguais')  
    })

})