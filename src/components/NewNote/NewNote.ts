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
    height: 75%;
    width: 80%;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  @media screen and (min-width: 600px) {
    height: 75vh;
    width: 40%;
  }

  & > button {
    align-self: baseline;
  }
  & > button#submit {
    align-self: center;
  }
`;

export const StyledMsg = styled.p`
  color: var(--${(props: { type: "success" | "error" }) => props.type}-color);
  margin: 7.5px auto;
  text-align: center;
  width: 100%;
  line-height: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const StyledTextbox = styled.input`
  width: 80%;
  height: 50px;
  padding: 0.2rem 0.5rem;
  border: solid 1px var(--shadow-color);
  border-radius: 7px;
`;

export const StyledTextArea = styled.textarea`
  width: 80%;
  height: 350px;
  padding: 0.2rem 0.5rem;
  border: solid 1px var(--shadow-color);
  border-radius: 7px;
`;

export const StyledSubmitBtn = styled.button`
  width: 150px;
  height: 35px;
  padding: 0.5rem;
  margin-top: auto;
  margin-bottom: 20px;
  border: solid 1px var(--shadow-color);
  border-radius: 7px;
  background-color: var(--primary-color);
  color: #fff;

  transition: ease-out 450ms;

  &:hover,
  &:focus {
    background-color: #fff;
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;
