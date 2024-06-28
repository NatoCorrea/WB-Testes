/// <reference types="cypress" />

import login from '../support/pages/login-modal'
import home from '../support/pages/home-page'

const elemento_login = require('../support/elements/login-elements').ELEMENTOS
const DADOS = require('../fixtures/dados-login.json')


describe('Validações na pagina de login', () =>{

    beforeEach(() =>{
        home.acessarHomePage()
        home.acessarModalLogin()

        login.validarModalLogin()
    })

    it('Realizar cadastro com dados validos', () => {
        login.preencherEmailLogin(DADOS.login)
        login.preencherSenha(DADOS.senha)
        login.clicarElemento(elemento_login.botao.entrar)

        login.validarLogin()

    })

    it('Realizar login com email invalido', () => {
        login.preencherEmailLogin(DADOS.login)
        login.preencherSenha(DADOS.senhaInvalida)
        login.clicarElemento(elemento_login.botao.entrar)

        login.validarMensagem('Usuário ou Senha inválido.')
    })

    it('Realizar login com senha invalida', () => {
        login.preencherEmailLogin(DADOS.loginInvalido)
        login.preencherSenha(DADOS.senha)
        login.clicarElemento(elemento_login.botao.entrar)

        login.validarMensagem('Usuário ou Senha inválido.')
    })

    it('Recuperar a senha', () => {
        login.clicarElemento(elemento_login.botao.esqueceuSenha)
        login.validarModalRecuperarSenha('Redefinir Senha')
        login.preencherEmailRecuperarSenha(DADOS.login)
        login.clicarElemento(elemento_login.botao.solicitarCodigo)

        login.validarMensagem('O código de verificação foi enviado para o e-mail informado.')

    })



})