import { Dispatch, SetStateAction, useState } from "react";
import AddNoteSVG from "../AddNoteSVG";
import { INote } from "../dtos/Note.dto";
import IconBtn from "../IconBtn";
import NewNote from "../NewNote";
import ListItem from "./ListItem";
import { ListWrapper, StyledList } from "./NoteList";

interface IProps {
  selectedNote: string | number | null;
  setSelectedNote: Dispatch<SetStateAction<string | number | null>>;
  notes: INote[];
}

function NoteList({ selectedNote, setSelectedNote, notes }: IProps) {
  const [newNote, setNewNote] = useState<boolean>(false);

  return (
    <ListWrapper noteId={selectedNote}>
      <h2>
        Notes
        <IconBtn icon="add" handler={() => setNewNote(true)}></IconBtn>
      </h2>
      {newNote && <NewNote />}
      {notes.length ? (
        <StyledList>
          {notes.map((note) => (
            <ListItem key={note._id} handler={setSelectedNote} note={note} />
          ))}
        </StyledList>
      ) : (
        <AddNoteSVG />
      )}
    </ListWrapper>
  );
}

export default NoteList;
