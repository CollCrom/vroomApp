import React from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';

const App: React.FC = () => {
  return (
    <div className="App">
      <CurrentWeather/>
    </div>
  );
}

export default App;
