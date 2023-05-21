import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  50% {
    transform: scale(1.25);
  }

  100% {
    transform: rotate(90deg);
  }
`;

export const AnimatedWrapper = styled.span`
  & > svg {
    width: 2.5rem;
    height: 2.5rem;
    animation: ${rotate} 0.5s ease-in-out infinite;
  }
`;
