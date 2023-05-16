import styled from "styled-components";
import { black, blue, white } from "../../../../styles/colors.ts";

export const OfferDiv = styled.div`
  background: ${white};
  border: 0.06rem solid #EAEBED;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
`;

export const OfferName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
`;

export const JobVacancy = styled.h3`
  color: ${blue};
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`;

export const BriefInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Salary = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${black};
  margin: 0;
`;

export const Information = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${black};
  margin: 0;
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
