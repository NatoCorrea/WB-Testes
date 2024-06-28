///<reference types="cypress"/>

export const ELEMENTOS = {   
    botao: {
        cadastrar: '.btn-cadastrar',
        fecharModal: '.modal-header>a>i',
        entreNaConta: '.login>a'
    },
    campo: {
        cpf: '#cpf',
        nome: '#nome',
        dataNascimento: '#dataNascimento',
        email: '#email',
        telefone: '#telefone',
        senha: '#password',
        confirmarSenha: '#confirmarSenha',
        afiliado: '#afiliado'
    },
    mensagem:{
        validaModal: 'form>span',
        erro: '.invalid-feedback'
    },
    link: {
        termosDeUso: '#linkTermos',
        politicaDePrivacidade: '#linkPolitica',
        politicaDePrivacidadeGoogle: '.col-12 > a:nth-child(2)',
        termosdeServico: '.col-12 > a:nth-child(3)'
    },
    logoMarca:{
        logo: '.logo-modal'
    }
}