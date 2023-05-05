import styled from 'styled-components';
import { black, white } from '../../styles/colors.ts';
import { gaps } from "../../styles/dismesions.ts";

const InnerBlock = styled.div`
  max-width: 65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  gap: 0.5rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 3.75rem;
`;

const ExternalBlock = styled.div`
  padding: ${gaps.medium} 0;
  background-color: ${white};
`;

const InnerContent = styled.h2`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 1rem;
`;

const LogoText = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1.5rem;
  color: ${black}
`;

export { InnerBlock, Logo, Menu, ExternalBlock, InnerContent, LogoText };
