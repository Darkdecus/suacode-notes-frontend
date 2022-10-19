import { MouseEventHandler } from "react";
import {
  StyledClearBtn,
  StyledFooter,
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
      <StyledClearBtn
        className="material-icons-outlined"
        onClick={closeHandler}
      >
        arrow_back
      </StyledClearBtn>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledFooter></StyledFooter>
    </StyledNote>
  );
}

export default Note;
