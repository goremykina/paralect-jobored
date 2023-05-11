import styled from "styled-components";
import { black, gray500, lightGray, white } from "../../../../styles/colors.ts";
import AsyncSelect from "react-select/async";

const Filters = styled.div`
  width: 20rem;
  background: ${white};
  border: 0.06rem solid ${lightGray};
  border-radius: 1.3rem;
  padding: 1.25rem;
`;

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 17.2rem;
  height: 2.6rem;
  border: 1px solid ${lightGray};
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${black};
`;

const LabelUp = styled.label`
  font-size: 20px;
  color: ${black};
  font-weight: 700;
`;

const TopButton = styled.button`
  border: none;
  background: white;
  color: ${gray500};
  font-size: 0.875rem;
`;

const Select = styled(AsyncSelect)`
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

const ButtonWrapper = styled.div`
  margin-top: 0.75rem;
`;

export { Filters, FormContent, TopPart, Input, Label, LabelUp, TopButton, Select, ButtonWrapper };
