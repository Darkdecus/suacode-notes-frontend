import React from "react";
import { StyledDate, StyledListItem, StyledTitle } from "./ListItem";

interface IProps {
  note: {
    title: string;
    createAt: string;
  };
}

function ListItem({ note: { title, createAt } }: IProps) {
  return (
    <StyledListItem>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{new Date(createAt).toDateString()}</StyledDate>
    </StyledListItem>
  );
}

export default ListItem;
