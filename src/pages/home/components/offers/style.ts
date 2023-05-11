import styled from "styled-components";
import { black, blue, white } from "../../../../styles/colors.ts";

const OfferDiv = styled.div`
  background: ${white};
  border: 0.06rem solid #EAEBED;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 1.5rem;
`;

const OfferName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  align-items: center;
`;

const JobVacancy = styled.h3`
  color: ${blue};
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`;

const BriefInfo = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`;

const SalarySpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${black};
  margin: 0;
`;

const InformationSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${black};
  margin: 0;
`;

const LocationDiv = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export { OfferDiv, OfferName, JobVacancy, BriefInfo, SalarySpan, InformationSpan, LocationDiv };
