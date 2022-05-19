
import './App.css';
import Days from './components/Days';
import Dropdown from './components/Dropdown';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <div className='wrapper'>
      <WeatherProvider>
        <Dropdown />
        <Days />
      </WeatherProvider>
    </div>
  );
}

export default App;
