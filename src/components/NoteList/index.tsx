import React from "react";
import ListItem from "./ListItem";
import { ListWrapper, StyledList } from "./NoteList";

function NoteList() {
  return (
    <ListWrapper>
      <h2>Notes</h2>
      <StyledList>
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
        <ListItem
          note={{
            title: "The title of the note",
            createAt: new Date(Date.now()),
          }}
        />
      </StyledList>
    </ListWrapper>
  );
}

export default NoteList;
