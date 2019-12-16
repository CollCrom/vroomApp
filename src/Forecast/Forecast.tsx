import React, { useState } from 'react';
import { getWeather } from '../getWeather.service';
import { WeatherProps, FiveDayForecast, fiveDayForecastInitState, OneDayForecast } from '../app.interface';
import { isEqual } from 'lodash';
import moment from 'moment';
import './Forecast.css';

const Forecast: React.FC<WeatherProps> = (props) => {

  const [state, setState]: [FiveDayForecast, any] = useState(fiveDayForecastInitState)

  const getDailyForecast = (weatherList: any, day: any) => {
    return weatherList.filter((forecast: any) => {
      return moment(forecast.dt_txt).toDate().getDate() === moment().add(day, 'days').toDate().getDate()
    }).reduce((dailyForecast: any, accumulator: any) => {
      return {
        date: accumulator.dt_txt.split(' ')[0],
        max: Math.floor(Math.max(accumulator.main.temp_max, dailyForecast.max || -1000)),
        min: Math.floor(Math.min(accumulator.main.temp_min, dailyForecast.min || 1000)),
        icon: accumulator.weather[0].icon
      }
    }, {})
  }

  getWeather(props.longitude, props.latitude, true).then((res: any) => {
    const weatherList = res.list;
    const fiveDayForecast: any[] = []
    if(weatherList){
      for(let i = 1; i < 6; i++){
        fiveDayForecast.push(getDailyForecast(weatherList, i))
      }
    }

    if(!isEqual(state, {fiveDayForecast})) {
      setState({
        fiveDayForecast
      })
    }
  })

  const forecastCards = state.fiveDayForecast.map((oneDayForecast: OneDayForecast, i: number) => {
    const imageUrl = `http://openweathermap.org/img/wn/${oneDayForecast.icon}@2x.png`
    return (
      <ul key={i} className='forecastCard'>
        <div>
          Date: {oneDayForecast.date}
        </div>
        <div>
          Daily High: {oneDayForecast.max}
        </div>
        <div>
          Daily Low: {oneDayForecast.min}
        </div>
        <img 
          className='weatherIcon'
          alt={oneDayForecast.icon}
          title ={oneDayForecast.icon}
          src={imageUrl}>
        </img>
      </ul>
    )
  })


  return (
    <>
      <ul className='forecastCards'>{forecastCards}</ul>
    </>
  )
}

export default Forecast;