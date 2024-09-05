import { Question } from "../Question/Question.jsx";

export function Questions({ current, questions, handleClick }) {
  return questions.map(
    (question) =>
      question.id === current && (
        <Question
          key={question.id}
          question={question.question}
          answers={question.answers}
          handleClick={handleClick}
        />
      ),
  );
}
