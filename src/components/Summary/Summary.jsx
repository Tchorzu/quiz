import {
  StyledSummary,
  StyledSummaryAnswer,
  StyledHeading,
  StyledAnswer,
} from "../styles/StyledSummary.jsx";

export function Summary({ questions, yourAnswers }) {
  return (
    <StyledSummary>
      <StyledHeading>Podsumowanie</StyledHeading>
      {questions.map((question) => (
        <StyledSummaryAnswer key={question.id}>
          <p>
            Pytanie {question.id}: {question.question}
          </p>
          <p>
            Twoja odpowiedź:{" "}
            {question.answers.map(
              (answer) =>
                answer.id === yourAnswers[question.id - 1] && (
                  <StyledAnswer
                    key={answer.id}
                    $good={yourAnswers[question.id - 1] === question.correct}
                  >
                    {answer.txt}
                  </StyledAnswer>
                ),
            )}
          </p>
          <p>
            Poprawna odpowiedź:
            {question.answers.map(
              (answer) =>
                answer.id === question.correct && (
                  <StyledAnswer key={answer.id} $good>
                    {answer.txt}
                  </StyledAnswer>
                ),
            )}
          </p>
        </StyledSummaryAnswer>
      ))}
    </StyledSummary>
  );
}
