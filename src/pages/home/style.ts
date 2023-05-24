import styled from "styled-components";

export const HomeContent = styled.div`
  width: 70rem;
  display: flex;
  gap: 1.75rem;
  align-items: flex-start;

  @media (max-width: 800px) {
    display: grid;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

