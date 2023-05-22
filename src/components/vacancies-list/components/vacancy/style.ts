import styled from "styled-components";
import { black, blue, white } from "../../../../styles/colors.ts";
import { Link } from "react-router-dom";

type Props = {
    isEnlarged: boolean
}

export const MainContainer = styled.div`
  width: 100%;
  background: ${white};
  border: 0.06rem solid #EAEBED;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
`;

export const VacancyName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
`;

export const JobTitleLink = styled(Link)`
  color: ${blue};
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
  text-decoration: none;
`;

export const JobTitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
`;

export const BriefInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Salary = styled.span`
  font-weight: 600;
  font-size: ${(props: Props) => props.isEnlarged ? '1.25rem' : '1rem'};
  color: ${black};
  margin: 0;
`;

export const Employment = styled.span`
  font-weight: 400;
  font-size: ${(props: Props) => props.isEnlarged ? '1.25rem' : '1rem'};
  color: ${black};
  margin: 0;
`;

export const Town = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: ${black};
  margin: 0;
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
