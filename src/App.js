import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello V2</div>
        <marquee>Do these still work...</marquee>
        <blink>AHHHHH!</blink>
      </header>
    </div>
  );
}

export default App;
