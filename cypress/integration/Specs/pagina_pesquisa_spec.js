/// <reference types="cypress" />
import { GALAXY_A70, BTN_PESQUISA, ENTER, XAIOMI, ONE_VISION, EVIDENCIA } from "../../fixtures/Page_Objetcs/po_pagina_pesquisa";

describe ('Pesquisa de produto', () => {

  beforeEach(() => {
    cy.acesso();
  }) //beforeEach

  it ('Pesquisa de produto usando a tecla enter', () => {
    cy.pesquisaEnter(GALAXY_A70, ENTER);
    cy.acessarProduto();
    cy.writeFile(EVIDENCIA, " " , { encoding: 'utf8'})
  }) // it pesquisa usando a tecla enter

  it ('Pesquisa de produto Galaxy A70 usando o botão de pesquisa', () => {
    cy.pesquisaBotao(GALAXY_A70, BTN_PESQUISA);
    cy.acessarProduto();
  }) //it pesquisa de produto com o botão de pesquisa

  it ('Pesquisa de produto Xaiomi usando o botão de pesquisa', () => {
    cy.pesquisaBotao(XAIOMI, BTN_PESQUISA);
    cy.acessarProduto();
  }) //it pesquisa de produto com o botão de pesquisa

  it ('Pesquisa de produto One Vision usando o botão de pesquisa', () => {
    cy.pesquisaBotao(ONE_VISION, BTN_PESQUISA);
    cy.acessarProduto();
  }) //it pesquisa de produto com o botão de pesquisa

  it ('Pesquisa de produto que nao existe na loja', () => {
    cy.pesquisaBotao('dshifsdfh', BTN_PESQUISA);
   
  }) //it pesquisa de produto que não existe




}) // describe