import styled from "styled-components";

export const StyledNote = styled.article`
  height: 100%;
  padding: 0.2rem 0.5rem;

  transition: ease-out 750ms width;

  @media screen and (min-width: 300px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: 80%;
  }
`;

export const StyledTitle = styled.h2`
  width: 100%;
  font-size: 1.75rem;
  font-weight: 300;
`;

export const StyledText = styled.p`
  width: 100%;
  font-size: 1rem;
  text-align: justify;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > p {
    width: 100%;
    color: #626262;
    font-weight: 300;
  }
`;
