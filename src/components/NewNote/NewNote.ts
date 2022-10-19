import styled from "styled-components";

export const Overlay = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: #0000008c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  @media screen and (min-width: 300px) {
    height: 60vh;
    width: 40%;
    background-color: #fff;
    border-radius: 10px;
  }
`;
