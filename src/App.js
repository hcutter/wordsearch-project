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
          <a href="https://github.com/hcutter/wordsearch-project.git" target="_blank" rel="noreferrer">Open-Source Code</a> by 
          <a href="https://portfolio-hannah-cutter.netlify.app/" target="_blank" rel="noreferrer"> Hannah Cutter</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
