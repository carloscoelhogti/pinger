import logo from './logo.svg';
import './App.css';
import Ping from './ping.js'
function App() {
  return (
    <div className="App">
      <header>
        <h1>Testador de Rede </h1>
        
      </header>
      <Ping />
      <h1>Git</h1>
      <p id="ping-github">Git Aqui</p>
      <h1>Google</h1>
      <p id="ping-google">Google Aqui</p>
    </div>
  );
}

export default App;
