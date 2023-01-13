
import './App.css';
import Hallofram from './components/Hallofram';
import Header from './components/Header';
import LiveProgram from './components/LiveProgram';
import Navbar from './components/Navbar';
import Hackthon from "./components/Hackthon";
import TestSeries from './components/TestSeries';
import Affortable from './components/Affortable';
import Neureo from './components/Neureo';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hallofram />
      <LiveProgram />
      <TestSeries />
      <Affortable />
      <Neureo />
      <Hackthon />
    </div>
  );
}

export default App;
