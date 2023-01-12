
import './App.css';
import Hallofram from './components/Hallofram';
import Header from './components/Header';
import LiveProgram from './components/LiveProgram';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hallofram />
      <LiveProgram />
    </div>
  );
}

export default App;
