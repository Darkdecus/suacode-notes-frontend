import { Dispatch, SetStateAction } from "react";
import { INote } from "../dtos/Note.dto";
import ListItem from "./ListItem";
import { ListWrapper, StyledList } from "./NoteList";

interface IProps {
  selectedNote: string | number | null;
  setSelectedNote: Dispatch<SetStateAction<string | number | null>>;
  notes: INote[];
}

function NoteList({ selectedNote, setSelectedNote, notes }: IProps) {
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
        {notes.map((note) => (
          <ListItem key={note._id} handler={setSelectedNote} note={note} />
        ))}
      </StyledList>
    </ListWrapper>
  );
}

export default NoteList;
