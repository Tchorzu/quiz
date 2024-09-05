import { StyledButton } from "../styles/StyledButton.jsx";

export function Question({ question, answers, handleClick }) {
  return (
    <>
      <h3>{question}</h3>
      <div>
        {answers.map(({ id, txt }) => (
          <StyledButton key={id} onClick={() => handleClick(id)}>
            {txt}
          </StyledButton>
        ))}
      </div>
    </>
  );
}
