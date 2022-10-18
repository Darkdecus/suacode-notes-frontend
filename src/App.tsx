import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

function App() {
  return (
    <main className="App">
      <Header />
      <div className="content-area">
        <NoteList />
        {/* <Note /> */}
      </div>
      <footer>
        <p>Made by Patrick with ❤ &copy;2022</p>
      </footer>
    </main>
  );
}

export default App;
