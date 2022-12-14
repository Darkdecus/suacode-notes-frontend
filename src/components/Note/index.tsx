import { MouseEventHandler } from "react";
import { INote } from "../dtos/Note.dto";
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
  note: INote;
}

function Note({
  closeHandler,
  note: { _id, title, body, createdAt, updatedAt },
}: IProps) {
  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    await fetch(
      ((process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BACKEND_URL_PROD
        : process.env.REACT_APP_BACKEND_URL_DEV) ||
        "http://localhost:5000/notes/") + _id,
      { method: "DELETE" }
    );
    setTimeout(() => {
      closeHandler(e);
    }, 1000);
  };
  return (
    <StyledNote>
      <IconBtn handler={closeHandler} icon="arrow_back" />
      <StyledTitle>
        {title}
        <IconBtn icon="delete_outline" handler={handleDelete} />
      </StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledFooter>
        <StyledFooterContainer>
          <p>
            <b>Created on</b> <br /> {new Date(createdAt).toDateString()}
          </p>
        </StyledFooterContainer>
        <StyledFooterContainer>
          <p>
            <b>Last updated</b> <br /> {new Date(updatedAt).toUTCString()}
          </p>
        </StyledFooterContainer>
      </StyledFooter>
    </StyledNote>
  );
}

export default Note;
