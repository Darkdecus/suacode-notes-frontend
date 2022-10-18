import React from "react";
import ListItem from "./ListItem";
import { StyledList } from "./NoteList";

function NoteList() {
  return (
    <StyledList>
      <ListItem
        note={{
          title: "The title of the note",
          createAt: Date.now().toString(),
        }}
      ></ListItem>
      <ListItem
        note={{
          title: "The title of the note",
          createAt: Date.now().toString(),
        }}
      ></ListItem>
      <ListItem
        note={{
          title: "The title of the note",
          createAt: Date.now().toString(),
        }}
      ></ListItem>
    </StyledList>
  );
}

export default NoteList;
