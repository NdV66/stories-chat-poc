/// <reference types="cypress" />

const NAMES = {
  CHILD_NAME: 'childName',
  CHILD_AGE: 'childAge',
  TOPIC: 'topic',
  NUMBER_OF_WORDS: 'numberOfWords',
};

const shouldEmptyFieldShowError = (name: string, text: string) => {
  cy.get(`input[name=${name}]`).type(text);
  cy.get(`input[name=${name}]`).clear();
  cy.get('button').contains('Imagine!').click();
  cy.contains('This field cannot be empty.');
};

describe('AddStory', () => {
  beforeEach(() => {
    cy.visit('/stories/add');
  });

  it('Should load the page', () => {
    cy.contains('Child name');
    cy.contains('Child age');
    cy.contains('Topic');
    cy.contains('Number od Words');
    cy.contains('Imagine!');
    cy.contains('Unleash your imaginations!');
    cy.get('button').contains('Imagine!').parent().should('not.be.disabled');
  });

  it('Should show no errors, when all fields are correct', () => {
    cy.get(`input[name=${NAMES.CHILD_NAME}]`).type('Irmo Lorien');
    cy.get(`input[name=${NAMES.CHILD_AGE}]`).type('4');
    cy.get(`input[name=${NAMES.TOPIC}]`).type('garden, love, siblings, parents');
    cy.get(`input[name=${NAMES.NUMBER_OF_WORDS}]`).type('166');

    cy.get('button').contains('Imagine!').parent().should('not.be.disabled');
  });

  it('Should show an error, when a "Child name" field is empty', () => {
    shouldEmptyFieldShowError(NAMES.CHILD_NAME, 'Irmo Lorien');
  });

  it('Should show an error, when a "Child age" field is empty', () => {
    shouldEmptyFieldShowError(NAMES.CHILD_AGE, '4');
  });

  it('Should show error, when a "Child age" field is not a number', () => {
    cy.get(`input[name=${NAMES.CHILD_NAME}]`).type('Namo Mandos');
    cy.get(`input[name=${NAMES.CHILD_AGE}]`).type('only six');
    cy.get(`input[name=${NAMES.TOPIC}]`).type('Halls of Mandos, doom, Noldors');
    cy.get(`input[name=${NAMES.NUMBER_OF_WORDS}]`).type('68');
    cy.get('button').contains('Imagine!').click();
    cy.contains('This type is wrong');
  });

  it('Should show error, when a "Topic" field is empty', () => {
    shouldEmptyFieldShowError(NAMES.TOPIC, 'Garden of Lorien, Aman, Middle-earth');
  });

  it('Should show error, when a "Number of words" field is empty', () => {
    shouldEmptyFieldShowError(NAMES.NUMBER_OF_WORDS, '167');
  });

  it('Should show error, when a "Number of words" field is not a number', () => {
    cy.get(`input[name=${NAMES.CHILD_NAME}]`).type('Namo Mandos');
    cy.get(`input[name=${NAMES.CHILD_AGE}]`).type('6');
    cy.get(`input[name=${NAMES.TOPIC}]`).type('Halls of Mandos, doom, Noldors');
    cy.get(`input[name=${NAMES.NUMBER_OF_WORDS}]`).type('sixty eight');
    cy.get('button').contains('Imagine!').click();
    cy.contains('This type is wrong');
  });

  it('Should disable form and show loader during request', () => {
    cy.get(`input[name=${NAMES.CHILD_NAME}]`).type('Namo Mandos');
    cy.get(`input[name=${NAMES.CHILD_AGE}]`).type('6');
    cy.get(`input[name=${NAMES.TOPIC}]`).type('Halls of Mandos, doom, Noldors');
    cy.get(`input[name=${NAMES.NUMBER_OF_WORDS}]`).type('168');
    cy.get('button').contains('Imagine!').click();

    cy.get('.MuiCircularProgress-circle').should('exist');
    cy.get(`input[name=${NAMES.CHILD_NAME}]`).should('be.disabled');
    cy.get(`input[name=${NAMES.CHILD_AGE}]`).should('be.disabled');
    cy.get(`input[name=${NAMES.TOPIC}]`).should('be.disabled');
    cy.get(`input[name=${NAMES.NUMBER_OF_WORDS}]`).should('be.disabled');
    cy.get('button').contains('Imagine!').should('be.disabled');
  });
});
