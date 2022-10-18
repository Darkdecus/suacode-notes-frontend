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
  justify-content: flex-start;
  gap: 20px;
`;

export const ListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75vh;
  width: 100%;
  padding: 0.25rem 0.5rem;
  margin: 0;
`;
