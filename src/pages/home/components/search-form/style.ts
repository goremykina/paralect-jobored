import styled from "styled-components";
import { black, gray500, lightGray, white } from "../../../../styles/colors.ts";
import AsyncSelect from "react-select/async";

export const Filters = styled.div`
  min-width: 20rem;
  background: ${white};
  border: 1px solid #EAEBED;
  border-radius: 0.75rem;
  padding: 1.25rem;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  height: 2.6rem;
  border: 0.06rem solid ${lightGray};
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: ${black};
`;

export const LabelUp = styled.label`
  font-size: 1.25rem;
  color: ${black};
  font-weight: 700;
`;

export const TopButton = styled.button`
  border: none;
  background: white;
  color: ${gray500};
  font-size: 0.875rem;
`;

export const  WrapperReset = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled(AsyncSelect)`
  font-size: 0.875rem;
  
  .react-select__control {
    border: 0.06rem solid ${lightGray};
    border-radius: 0.5rem;
    height: 2.6rem;
    margin-bottom: 0.75rem;
  }
  
  .react-select__indicator-separator {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.75rem;
`;
