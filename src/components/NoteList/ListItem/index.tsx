import { Dispatch, SetStateAction } from "react";
import { StyledDate, StyledListItem, StyledTitle } from "./ListItem";

interface IProps {
  note: {
    _id: string | number;
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };
  handler: Dispatch<SetStateAction<string | number | null>>;
}

function ListItem({ note: { _id, title, createdAt }, handler }: IProps) {
  return (
    <StyledListItem onClick={() => handler(_id)}>
      <span className="material-icons-outlined">edit_note</span>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>
        Last updated on {new Date(createdAt).toDateString()}
      </StyledDate>
    </StyledListItem>
  );
}

export default ListItem;
