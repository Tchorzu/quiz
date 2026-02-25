import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  margin: 10px 0;
  padding: 12px 24px;
  font-size: 17px;
  background-color: var(--var-btn-bg);
  color: var(--var-btn-txt);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--var-btn-hover);
  }
`;
