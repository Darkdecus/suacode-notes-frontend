import styled from "styled-components";

export const StyledNote = styled.article`
  height: 100%;
  padding: 0.2rem 0.5rem;
  width: 80%;
  transition: ease-out 750ms width;
  & > * {
    width: 100%;
  }
`;

export const StyledClearBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 35px;
  height: 35px;
  padding: 0.1rem;
  border-radius: 50%;
  transition: ease-out 350ms box-shadow;
  &:hover,
  &:focus {
    box-shadow: 0 0 5px 0px #d7d7d7;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 300;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const StyledFooter = styled.footer`
  display: flex;
`;
