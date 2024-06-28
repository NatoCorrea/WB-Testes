/// <reference types="cypress" />

import home from '../support/pages/home-page'
import cadastro from '../support/pages/cadastro-modal'
import login from '../support/pages/login-modal'

// import esportes from '../support/pages/esportes-page'
// import esporteAoVivo from '../support/pages/esportes-aovivo-page'

// import cassino from '../support/pages/cassino-page'


describe('Navegação na Home Page', () => {

    beforeEach(() => {
        home.acessarHomePage()

        home.validarHomPage()
    })
    it('Acessar o modal de cadastro', () => {
        home.acessarModalCadastro()

        cadastro.validarModalCadastro()        
    })

    it('Acessar o modal de login', () => {
        home.acessarModalLogin()

        login.validarModalLogin()
    })


})