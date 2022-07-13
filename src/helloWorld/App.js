import './App.css';
import LogoPath from './assets/images/swagImage.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LogoPath} className="App-logo" alt="logo" />
        <p>
          You can now see <code>Me</code> rotating.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feels good to Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
