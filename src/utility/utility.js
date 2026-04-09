

export const rock = 0;
export const paper = 1;
export const scissors = 2;
export const numberOfChoices = 3;
export const initialStateOfChoice = -1;

export const choices = ["rock", "paper", "scissors"];

/**
 * @return {number}
 */
export function makeChoice() {
  return Math.floor(Math.random() * numberOfChoices);
}

/**
 * @param {number} choiceOfPerson
 * @param {number} choiceOfComputer
 * @return {boolean}
 */
export function personIsWinner(choiceOfPerson, choiceOfComputer) {
  return (
    (choiceOfPerson === rock && choiceOfComputer === scissors) ||
    (choiceOfPerson === scissors && choiceOfComputer === paper) ||
    (choiceOfPerson === paper && choiceOfComputer === rock)
  );
}

/**
 * @param {number} choiceOfPerson
 * @param {number} choiceOfComputer
 * @return {boolean}
 */
export function computerIsWinner(choiceOfPerson, choiceOfComputer) {
  return (
    (choiceOfComputer === rock && choiceOfPerson === scissors) ||
    (choiceOfComputer === scissors && choiceOfPerson === paper) ||
    (choiceOfComputer === paper && choiceOfPerson === rock)
  );
}