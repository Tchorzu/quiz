import { useState } from "react";
import { Questions } from "./components/Questions/Questions.jsx";
import { Summary } from "./components/Summary/Summary.jsx";
import { StyledContainer } from "./components/styles/StyledContainer.jsx";
import { QUIZ_QUESTION } from "./utils/question.js";

function App() {
  const [questions, setQuestions] = useState(QUIZ_QUESTION);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [points, setPoints] = useState(0);
  const [yourAnswers, setYourAnswers] = useState([]);

  function handleAnswerClick(answer) {
    setYourAnswers((prevState) => [...prevState, answer]);
    if (answer === questions[currentQuestion - 1].correct) {
      setPoints((prevState) => prevState + 1);
    }
    setCurrentQuestion((prevState) => prevState + 1);
  }

  return (
    <StyledContainer>
      <h2>
        {questions.length - currentQuestion >= 0
          ? `Pytanie ${currentQuestion} z ${questions.length}`
          : `Wynik: ${points} z ${questions.length}`}
      </h2>
      {questions.length - currentQuestion >= 0 ? (
        <Questions
          current={currentQuestion}
          questions={questions}
          handleClick={handleAnswerClick}
        />
      ) : (
        <Summary questions={questions} yourAnswers={yourAnswers} />
      )}
    </StyledContainer>
  );
}

export default App;
