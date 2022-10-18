import React from "react";
import { StyledDate, StyledListItem, StyledTitle } from "./ListItem";

interface IProps {
  note: {
    title: string;
    createAt: string | Date;
  };
}

function ListItem({ note: { title, createAt } }: IProps) {
  return (
    <StyledListItem>
      <span className="material-icons-outlined">edit_note</span>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{new Date(createAt).toDateString()}</StyledDate>
    </StyledListItem>
  );
}

export default ListItem;
