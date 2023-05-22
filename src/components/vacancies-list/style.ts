import styled from "styled-components";
import { gaps } from "../../styles/dismesions.ts";
import ReactPaginate from "react-paginate";
import { black, blue, white } from "../../styles/colors.ts";

export const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gaps.normal};
  height: 100%;
  width: 100%;
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  justify-content: center;
  margin: 2rem 0 0 0;
  padding: 0;
  
  & > li {
    background: ${white}
    color: ${black};
    border: 0.06rem solid #D5D6DC;
    border-radius: 0.25rem;
    
    & > a {
      display: block;
      padding: 0.5rem 0.75rem;
    }
    
    &:hover{
      cursor: pointer;
    }
    
    &.selected {
      background: ${blue};
      color: ${white};
    }
    
    &.disabled {
      color: #D5D6DC;
      border: 0.06rem solid #EAEBED;
    }
  }
`;
