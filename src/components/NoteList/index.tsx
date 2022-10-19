import { Dispatch, SetStateAction } from "react";
import ListItem from "./ListItem";
import { ListWrapper, StyledList } from "./NoteList";

interface IProps {
  selectedNote: string | number | null;
  setSelectedNote: Dispatch<SetStateAction<string | number | null>>;
}

function NoteList({ selectedNote, setSelectedNote }: IProps) {
  // const handleClick = (id: string | number) => {
  //   setSelectedNote(id);
  //   return (e: any) => {
  //     console.log("click was called");
  //   };
  // };

  return (
    <ListWrapper noteId={selectedNote}>
      <h2>Notes</h2>
      <StyledList>
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
        <ListItem
          handler={setSelectedNote}
          note={{
            _id: Math.round(Math.random() * 1e6),
            title: "The title of the note",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
          }}
        />
      </StyledList>
    </ListWrapper>
  );
}

export default NoteList;
