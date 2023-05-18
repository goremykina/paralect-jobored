import styled from "styled-components";
import { blue, gray500 } from "../../../../../../styles/colors.ts";

type Props = {
    isFavorite: boolean
};

export const StarButton = styled.button`
  background: none;
  border: none;
  
  & > svg {
    fill: ${({ isFavorite } : Props) => isFavorite ? blue : 'none'};
    color: ${({ isFavorite } : Props) => isFavorite ? blue : gray500};
  }
  
  &:hover > svg {
    color: ${blue};
    fill: ${blue};
  }
`;
