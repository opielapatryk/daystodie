import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter your date of birth.
        </p>
        <input type="date" name="App-date" id="App-date" />
        <button
          className="App-button"
        >
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
