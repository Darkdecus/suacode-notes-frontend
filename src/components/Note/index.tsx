import { MouseEventHandler } from "react";
import IconBtn from "../IconBtn";
import {
  StyledFooter,
  StyledFooterContainer,
  StyledNote,
  StyledText,
  StyledTitle,
} from "./Note";

interface IProps {
  closeHandler: MouseEventHandler<HTMLButtonElement>;
  note: {
    title: string;
    body: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };
}

function Note({
  closeHandler,
  note: { title, body, createdAt, updatedAt },
}: IProps) {
  return (
    <StyledNote>
      <IconBtn
        // className="material-icons-outlined"
        handler={closeHandler}
        icon="arrow_back"
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledFooter>
        <StyledFooterContainer>
          <p>
            <b>Created on</b> <br /> {new Date(createdAt).toDateString()}
          </p>
        </StyledFooterContainer>
        <StyledFooterContainer>
          <p>
            <b>Last updated</b> <br /> {new Date(updatedAt).toDateString()}
          </p>
        </StyledFooterContainer>
      </StyledFooter>
    </StyledNote>
  );
}

export default Note;
