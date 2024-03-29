import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import { LocalCoordinates, appInitState } from './app.interface'
import { isEqual } from 'lodash'
import Forecast from './Forecast/Forecast';

const App: React.FC = () => {

  const [state, setState] = useState(appInitState)

  const getPosition = (position: LocalCoordinates): void => {
    const { coords: { longitude, latitude }} = position
    const newPosition = {
      coords: {
        longitude,
        latitude
      }
    }
    if(!isEqual(state, newPosition)){
      setState({
        ...state,
        ...newPosition
      })
    }
  }
  
  const locationErrorHandler = (error: any): void => {
    console.warn(error, 'locationErrorHandler')
  } 
  
  const getLocation = (): void => {
    const options = {
        enableHighAccuracy: true,
        timeout: 100,
        maximumAge: 0
    }
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(getPosition, locationErrorHandler, options)
      : console.warn('Could not get Location')
  }
  const handleChange = (event: any) => {
    setState({
      ...state,
      showCurrentWeather: !state.showCurrentWeather
    })
  }

  getLocation()
  return (
    <>
      <button onClick={handleChange} className='toggle'>
        Get {state.showCurrentWeather ? 'Five Day Forecast' : 'Current Weather'}
      </button>
      {state.showCurrentWeather ? <CurrentWeather 
        longitude = {state.coords.longitude}
        latitude = {state.coords.latitude}
      /> : <Forecast
        longitude = {state.coords.longitude}
        latitude = {state.coords.latitude}
      />}
    </>
  );
}

export default App;
