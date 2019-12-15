import React, { useState } from 'react';
import { getWeather } from '../getWeather.service';
import { WeatherProps, WeatherReport, CurrentWeatherInitState, CurrentWeatherState } from '../app.interface';
import { isEqual } from 'lodash';
import './CurrentWeather.css';

const CurrentWeather: React.FC<WeatherProps> = (props) => {
  const [state, setState]: [CurrentWeatherState, any] = useState(CurrentWeatherInitState)

  getWeather(props.longitude, props.latitude).then((res: WeatherReport) => {
    const newWeather: CurrentWeatherState = {
      name: res.name,
      main: res.main,
      weather: res.weather
    }
    if(!isEqual(state, newWeather)) {
      setState({
        ...state,
        ...newWeather
      })
    }
  })

  const weatherIcons = state.weather.map((weather, i) =>{
    const imageUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
    return <img 
      className='weatherIcon'
      key={i}
      alt={weather.description}
      title ={weather.description}
      src={imageUrl}>
    </img>
  })
  
  const weatherCard = <div className='weatherCard'>
    <div className='location'>
      {state.name}
    </div>
    {weatherIcons}
    <div>Current Temperature: {Math.floor(state.main.temp)} °F</div>
    <div>Feels Like: {Math.floor(state.main.feels_like)} °F</div>
    <div>High: {Math.floor(state.main.temp_max)} °F</div>
    <div>Low: {Math.floor(state.main.temp_min)} °F</div>
  </div>
  
  return (
    <>
      {weatherCard}
    </>
  )
}

export default CurrentWeather;