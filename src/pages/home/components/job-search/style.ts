import styled from "styled-components";
import { white } from "../../../../styles/colors.ts";

export const SearchJobForm = styled.form`
  position: relative;
`;

export const SearchJobInput = styled.input`
  display: block;
  width: 100%;
  border: 0.06rem solid #EAEBED;
  border-radius: 0.5rem;
  height: 3rem;
  background: ${white};
  padding: 0 6.875rem 0 2.5rem;
`;

export const SearchIconWrapper = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.875rem;
  top: 0;
  bottom: 0;
`;

export const SearchButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.875rem;
  top: 0;
  bottom: 0;
`;
