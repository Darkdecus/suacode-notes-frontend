import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

function App() {
  const [selectedNote, setSelectedNote] = useState<string | number | null>(
    null
  );
  return (
    <main className="App">
      <Header />
      <div className="content-area">
        <NoteList setSelectedNote={setSelectedNote} />
        {selectedNote && (
          <Note
            note={{
              title: "The title of the note",
              body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa, at maiores quae deserunt eveniet ullam rerum dignissimos commodi asperiores odio sit quos accusantium ab. Quod, numquam. Error, amet optio.",
              createdAt: new Date(Date.now()),
              updatedAt: new Date(Date.now()),
            }}
          />
        )}
      </div>
      <footer>
        <p>Made by Patrick with ❤ &copy;2022</p>
      </footer>
    </main>
  );
}

export default App;
