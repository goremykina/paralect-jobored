import styled from 'styled-components';
import { black, white } from '../../../../styles/colors.ts';
import { gaps } from "../../../../styles/dismesions.ts";
import { Link } from "react-router-dom";

export const InnerBlock = styled.div`
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  gap: 0.5rem;
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  gap: 3.75rem;
`;

export const ExternalBlock = styled.div`
  padding: ${gaps.medium} 0;
  background-color: ${white};
`;

export const InnerContent = styled.h2`
  font-family: 'Inter', serif;
  font-weight: 500;
  font-size: 1rem;
`;

export const LogoText = styled.h2`
  font-family: 'Poppins', serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${black}
`;
