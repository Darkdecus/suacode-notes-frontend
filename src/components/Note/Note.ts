import styled from "styled-components";

export const StyledNote = styled.article`
  height: 100%;
  padding: 0.2rem 0.5rem;
  & > * {
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const StyledText = styled.p`
  font-size: 1rem;
`;

export const StyledFooter = styled.footer`
  display: flex;
`;
