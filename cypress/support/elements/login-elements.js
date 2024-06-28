///<reference types="cypress" />

export const ELEMENTOS = {
    botao: {
        entrar: '.btn-block',
        perfil: '.dropdown-toggle.nav-link.menu-perfil',
        fecharModal: '.modal-header>a>i',
        esqueceuSenha: '.esqueceu-senha',
        registre: '.registrar>a',
        solicitarCodigo: '.btn.btn-custom.btn-block' 
    },
    campo: {
        nome: '#username',
        senha: '#password',
        email: '.ng-invalid.is-invalid.ng-touched',
        recuperarSenha: '.form-group.mb-4 > input'
    },
    mensagem: {
        retorno: '#toast-container',
        titulo: '.modal-body > h2',
        
    },
    logoMarca: {
        logo: '.logo-modal'
    }
}
