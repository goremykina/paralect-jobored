import styled, { css, keyframes } from "styled-components";
import { blue, gray500 } from "../../../../../../styles/colors.ts";

type Props = {
    isFavorite: boolean
    isClicked: boolean
};

const scaleUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  
  & > svg {
    fill: ${({ isFavorite } : Props) => isFavorite ? blue : 'none'};
    color: ${({ isFavorite } : Props) => isFavorite ? blue : gray500};

    ${({ isClicked }) => isClicked && css`
      animation: 0.25s ${scaleUp} ease-in-out;
    `}
  }

  &:hover > svg {
    color: ${blue};
  }
`;
