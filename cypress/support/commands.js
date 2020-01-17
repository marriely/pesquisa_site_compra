
import { URL, CAMPO_PESQUISA, BTN_PESQUISA, EVIDENCIA } from "../fixtures/Page_Objetcs/po_pagina_pesquisa";

Cypress.Commands.add("acesso", ()=>{
    cy.visit(URL)
  
}) //acesso a página e limpando o arquivo de evidência do teste

Cypress.Commands.add("pesquisaEnter", (produtoPesquisado, formaPesquisa) => {
    cy.get(CAMPO_PESQUISA)
    .type(produtoPesquisado)
    .type(formaPesquisa);
}) //pesquisa com a tecla enter
 
Cypress.Commands.add("pesquisaBotao", (produtoPesquisado, formaPesquisa)=> {
    cy.get(CAMPO_PESQUISA)
    .type(produtoPesquisado)

    cy.get(BTN_PESQUISA)
    .click({force:true});
}) //pesquisa com o botão pesquisar

Cypress.Commands.add("acessarProduto", ()=> {

    cy.get('.product-grid-item').first().click(); //clica no item da lista de resultado
     
    cy.get('#product-name-default').invoke('text').then((produto) => {
          cy.log(produto)          
          cy.writeFile(EVIDENCIA, { descrição: produto} , { encoding: 'utf8', flag: 'a+' })
    }); //obter nome do produto
 
    cy.get('.sales-price').invoke('text').then((valor_produto) => {
        cy.log(valor_produto)
        cy.writeFile(EVIDENCIA, { valor: valor_produto} , { encoding: 'utf8', flag: 'a+' })
    }); //obter o preço do produto

    cy.url().then(url => {
        let currentURL = url;
        cy.log(currentURL)
        cy.writeFile(EVIDENCIA, { url: currentURL} , { encoding: 'utf8', flag: 'a+' })
    }); //obter a url visitada
    

}) //passos para realizar a pesquisa de produto