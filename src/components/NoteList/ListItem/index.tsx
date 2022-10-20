import { Dispatch, SetStateAction } from "react";
import { INote } from "../../dtos/Note.dto";
import IconBtn from "../../IconBtn";
import {
  StyledDate,
  StyledIconWapper,
  StyledListItem,
  StyledTitle,
} from "./ListItem";

interface IProps {
  note: INote;
  handler: Dispatch<SetStateAction<string | number | null>>;
  showForm: any;
}

function ListItem({ note, handler, showForm }: IProps) {
  const handleDelete = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.stopPropagation();
    await fetch(
      ((process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BACKEND_URL_PROD
        : process.env.REACT_APP_BACKEND_URL_DEV) ||
        "http://localhost:5000/notes/") + note._id,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <StyledListItem onClick={(e) => handler(note._id)}>
      <StyledIconWapper>
        <IconBtn icon="edit_note" handler={showForm} />
        <IconBtn icon="delete_outline" handler={handleDelete} />
      </StyledIconWapper>
      <StyledTitle>{note.title}</StyledTitle>
      <StyledDate>
        Last updated on {new Date(note.createdAt).toDateString()}
      </StyledDate>
    </StyledListItem>
  );
}

export default ListItem;
