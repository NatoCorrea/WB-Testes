function waitElement(elemento){
    try {
        cy.log('Aguardando elemento ' + elemento + ' está visível')
        cy.get(elemento).and('be.visible')
        cy.log('Encontrou o elemento ' + elemento)
    } catch (error) {
        cy.log('Execeção capturada: ' + error.message)
    }
    return waitElement;
}

function waitElement_index(elemento, index){
    try {
        cy.log('Aguardando o elemento ' + elemento + 'o Index ' + index + 'está visível')
        cy.get(elemento).eq(index)
        cy.log('Encontrou o elemento ' + elemento)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return waitElement_index;
}

function set(elemento, texto){
    scrollTo(elemento)
    waitElement(elemento)  
    try {
        cy.get(elemento).type(texto)
        cy.log('Inseriu as informações no ' + elemento)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return set;
}

function click(elemento){
    scrollTo(elemento)
    waitElement(elemento)
    try {
        cy.get(elemento).click()
        cy.log('Clicou no ' + elemento);
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)    
    }
    return click;
}

function click_index(elemento, index){
    scrollTo(elemento)
    waitElement(elemento)
    try {
        cy.get(elemento).eq(index).click()
        cy.log('Clicou no elemento ' + elemento + ' no Index ' + index)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return click_index;
}

function clear(elemento){
    scrollTo(elemento)
    waitElement(elemento)
    try {
        cy.get(elemento).clear()
        cy.log('Limpou no elemento ' + elemento)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return clear;
}

function get_text(elemento){
    scrollTo(elemento)
    waitElement(elemento)
    let text
    try {
        text = cy.get(elemento)
        cy.log('Encontrou o ' + elemento + ' com o texto ' + text)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return text;
}

function get_text_index(elemento, index){
    scrollTo(elemento)
    waitElement(elemento)
    let text
    try {
        text = cy.get(elemento).eq(index)
        cy.log('Encontrou o ' + elemento + ' com o index ' + index + ' e com o texto ' + text)
    } catch (error) {
        cy.log('Execeção capturada ' + error.message)
    }
    return text;
}
function scrollTo(elemento){
    try {
        cy.get(elemento)
            .scrollIntoView()
            .should('be.visible')
        cy.log('Visualizou o elemento ' + elemento)
    } catch (error) {
        cy.log('Execeção capturada' + error.message)
    }
    return scrollTo;
}

module.exports = {
    waitElement, waitElement_index, set, click,
    click_index, clear, get_text, get_text_index, scrollTo
}


