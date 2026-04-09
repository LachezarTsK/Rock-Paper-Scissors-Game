import "../style/style.css";
import {
  initialStateOfChoice,
  choices,
  personIsWinner,
  computerIsWinner,
} from "../utility/utility";

export default function DisplayBoard({
  choicePerson,
  choiceComputer,
  scorePerson,
  scoreComputer,
  numberOfRounds,
}) {
  return (
    <div className="display-board">
      <span>{numberOfRounds > 0 && "Number Of Rounds: " + numberOfRounds}</span>
      <span>
        {" "}
        {numberOfRounds > 0 &&
          personIsWinner(choicePerson, choiceComputer) &&
          "Current Round won by you."}
      </span>
      <span>
        {numberOfRounds > 0 &&
          computerIsWinner(choicePerson, choiceComputer) &&
          "Current Round won by computer."}
      </span>
      <span>
        {numberOfRounds > 0 &&
          !personIsWinner(choicePerson, choiceComputer) &&
          !computerIsWinner(choicePerson, choiceComputer) &&
          "Current Round is a draw."}
      </span>
      <hr className="horizontal-line" />
      <div>
        Your Choice:{" "}
        {choicePerson > initialStateOfChoice && choices[choicePerson]}
      </div>
      <div>
        Computer's Choice:{" "}
        {choiceComputer > initialStateOfChoice && choices[choiceComputer]}
      </div>
      <hr className="horizontal-line" />
      <div>Your Score: {scorePerson}</div>
      <div>Computer's Score: {scoreComputer}</div>
      <div>Draws: {numberOfRounds - scorePerson - scoreComputer}</div>
    </div>
  );
}
