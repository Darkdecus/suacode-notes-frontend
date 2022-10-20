import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem 0.5rem;
  width: 20rem;
  min-height: 80px;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  transition: ease-out 450ms border, ease-out 450ms box-shadow;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: var(--shadow);
  }

  & p {
    width: 100%;
    display: block;
  }
`;

export const StyledIconWapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;

  & > button {
    transition: ease-out 350ms color, ease-out 350ms box-shadow;
    align-self: flex-end;
    padding: 0.2rem;
    border-radius: 50%;
    &:hover,
    &:focus {
      padding: 0.3rem;
      box-shadow: var(--shadow);
      color: #2f78b2;
    }
  }
  & > button:first-of-type {
    &:hover,
    &:focus {
      color: #2f78b2;
    }
  }

  & > button:last-of-type {
    &:hover,
    &:focus {
      color: var(--error-color);
    }
  }
`;

export const StyledTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: justify;
`;

export const StyledDate = styled.p`
  font-size: 0.8rem;
  text-align: right;
`;
