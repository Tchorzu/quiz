import styled from "styled-components";
import { StyledContainer } from "./StyledContainer.jsx";

export const StyledSummary = styled(StyledContainer)`
  margin: 20px 0;
  background-color: var(--var-bg-white-quiz);
`;

export const StyledSummaryAnswer = styled.div`
  margin: 0 0 10px;
`;

export const StyledHeading = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledAnswer = styled.span`
  color: ${({ $good }) => ($good ? "#45a049" : "#f44336")};
`;
