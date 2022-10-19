import styled from "styled-components";

export const StyledIconBtn = styled.button`
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
