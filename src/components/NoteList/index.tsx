import { Dispatch, SetStateAction, useState } from "react";
import AddNoteSVG from "../AddNoteSVG";
import { INote } from "../dtos/Note.dto";
import IconBtn from "../IconBtn";
import NewNote from "../NewNote";
import UpdateNote from "../UpdateNote";
import ListItem from "./ListItem";
import { ListWrapper, StyledList } from "./NoteList";

interface IProps {
  selectedNote: string | number | null;
  setSelectedNote: Dispatch<SetStateAction<string | number | null>>;
  notes: INote[];
}

function NoteList({ selectedNote, setSelectedNote, notes }: IProps) {
  const [newNote, setNewNote] = useState<boolean>(false);
  const [updateFormId, setUpdateFormId] = useState<string | number | null>(
    null
  );
  const updateForm = notes.find((note) => note._id === updateFormId);
  const showForm =
    (note: INote) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.stopPropagation();
      setUpdateFormId(note._id);
    };
  const hideForm = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    setUpdateFormId(null);
  };
  return (
    <ListWrapper noteId={selectedNote}>
      {updateForm && (
        <UpdateNote
          handler={hideForm}
          note={updateForm}
          titles={notes.reduce<string[]>(
            (titles, note) => [...titles, note.title],
            []
          )}
        />
      )}
      <h2>
        Notes
        <IconBtn icon="add" handler={() => setNewNote(true)}></IconBtn>
      </h2>
      {newNote && <NewNote handler={() => setNewNote(false)} />}
      {notes.length ? (
        <StyledList>
          {notes.map((note) => (
            <ListItem
              key={note._id}
              handler={setSelectedNote}
              note={note}
              showForm={showForm(note)}
            />
          ))}
        </StyledList>
      ) : (
        <AddNoteSVG />
      )}
    </ListWrapper>
  );
}

export default NoteList;
