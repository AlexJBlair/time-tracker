import './App.css';
import CurrentDate from './components/CurrentDate';
import HeaderBar from './components/HeaderBar';
import TimeReadout from './components/TimeReadout';
function App() {
  return (
    <div className='App'>
      <HeaderBar />
      <CurrentDate />
      <TimeReadout />
    </div>
  );
}

export default App;
