import React, { useState } from 'react';
import { getWeather } from '../getWeather.service';
import { WeatherProps } from '../app.interface';


const Forecast: React.FC<WeatherProps> = (props) => {

  getWeather(props.longitude, props.latitude, true).then((res: any) => console.log(res))
  return (
    <>
      hi
    </>
  )
}

export default Forecast;