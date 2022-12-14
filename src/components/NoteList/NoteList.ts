import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0.25rem 0.5rem;
  overflow-y: auto;
  transition: ease-out 750ms width;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 20px;
`;

export const ListWrapper = styled.article`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  width: ${(props: { noteId: string | number | null }) =>
    props.noteId ? "20%" : "100%"};
  padding: 0.25rem 0.5rem;
  margin: 0;

  & > h2 {
    display: flex;
    align-items: center;
    & > button {
      & > span {
        font-size: 2rem;
      }
      transition: ease-out 450ms;
      margin-left: 20px;
      height: 60px;
      width: 60px;
      background-color: var(--primary-color);
      color: #fff;
      &:hover,
      &:focus {
        background-color: #fff;
        color: var(--primary-color);
      }
    }
  }

  @media screen and (min-width: 300px) {
    display: ${(props: { noteId: string | number | null }) =>
      props.noteId ? "none" : "flex"};
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;
