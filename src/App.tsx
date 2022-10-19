import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteList from "./components/NoteList";
import { useNotes } from "./hooks/useNotes";

function App() {
  const [selectedNote, setSelectedNote] = useState<string | number | null>(
    null
  );
  const { notes } = useNotes();
  const note = notes.find((note) => note._id === selectedNote);

  const clearNoteSelection = () => setSelectedNote(null);

  return (
    <main className="App">
      <Header />
      <div className="content-area">
        <NoteList
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          notes={notes}
        />
        {note && <Note closeHandler={clearNoteSelection} note={note} />}
      </div>
      <footer>
        <p>Made by Patrick with ❤ &copy;2022</p>
      </footer>
    </main>
  );
}

export default App;
