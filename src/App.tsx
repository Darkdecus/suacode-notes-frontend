import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NoteList />
        <Note />
      </main>
      <footer>
        <p>Made by Patrick with ❤ &copy;2022</p>
      </footer>
    </div>
  );
}

export default App;
