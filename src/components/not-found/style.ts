import styled from "styled-components";
import { blue100, blue600, gray900 } from "../../styles/colors.ts";
import { Link } from "react-router-dom";

export const ErrorMessage = styled.h3`
  color: ${gray900};
  font-size: 1.5rem;
`;

export const VacancyLink = styled(Link)`
  background: ${blue100};
  padding: 0.625rem 1.5rem;
  color: ${blue600};
  border-radius: 8px;
  text-decoration: none;
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;
