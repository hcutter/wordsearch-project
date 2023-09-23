import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer>
          <a href="https://github.com/hcutter/wordsearch-project.git">Open-Source Code</a> by Hannah Cutter</footer>
      </div>
    </div>
  );
}

export default App;
