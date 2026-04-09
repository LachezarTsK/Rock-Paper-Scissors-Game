import { useState } from "react";
import "../style/style.css";
import DisplayBoard from "./DisplayBoard";
import {
  rock,
  paper,
  scissors,
  initialStateOfChoice,
  makeChoice,
  personIsWinner,
  computerIsWinner,
} from "../utility/utility";

export default function Game() {
  const [choicePerson, setChoicePerson] = useState(initialStateOfChoice);
  const [choiceComputer, setChoiceComputer] = useState(initialStateOfChoice);
  const [scorePerson, setScorePerson] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  function handleMakeChoice(choiceOfPerson) {
    const choiceOfComputer = makeChoice();
    setChoicePerson(choiceOfPerson);
    setChoiceComputer(choiceOfComputer);

    handleSetScore(choiceOfPerson, choiceOfComputer);
    setNumberOfRounds(numberOfRounds + 1);
  }

  function handleSetScore(choiceOfPerson, choiceOfComputer) {
    if (personIsWinner(choiceOfPerson, choiceOfComputer)) {
      setScorePerson((scorePerson) => scorePerson + 1);
      return;
    }
    if (computerIsWinner(choiceOfPerson, choiceOfComputer)) {
      setScoreComputer((scoreComputer) => scoreComputer + 1);
    }
  }

  function handleReset() {
    setChoicePerson(initialStateOfChoice);
    setChoiceComputer(initialStateOfChoice);
    setScorePerson(0);
    setScoreComputer(0);
    setNumberOfRounds(0);
  }

  return (
    <div>
      <h2 className="title">Welcome to Rock Paper Scissor Game</h2>
      <div>
        <button className="button" onClick={() => handleMakeChoice(rock)}>
          Rock
        </button>
        <button className="button" onClick={() => handleMakeChoice(paper)}>
          Paper
        </button>
        <button className="button" onClick={() => handleMakeChoice(scissors)}>
          Scissor
        </button>
        <div>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <DisplayBoard
        choicePerson={choicePerson}
        choiceComputer={choiceComputer}
        scorePerson={scorePerson}
        scoreComputer={scoreComputer}
        numberOfRounds={numberOfRounds}
      />
    </div>
  );
}
