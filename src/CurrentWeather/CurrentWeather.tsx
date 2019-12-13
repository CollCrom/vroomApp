import React, { useState } from 'react'
import { getWeather } from '../getWeather.service'

const CurrentWeather: React.FC = () => {
    const [state, setState] = useState({
        longitude: 0,
        latitude: 0
    })

    const getPosition = (position: any) => {
        const { coords: { longitude, latitude }} = position
        setState({longitude, latitude})
    }
    
    const locationErrorHandler = (error: any): void => {
        console.warn(error)
    } 
    
    const getLocation = (): void | string => {
        const options = {
            enableHighAccuracy: true,
            timeout: 100,
            maximumAge: 0
        }
        return navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(getPosition, locationErrorHandler, options)
            : console.warn('tim is gay')
    }
    
    getLocation()
    console.log(state, 'state')
    getWeather(state.longitude, state.latitude)
    return (
        <p>
            hi
        </p>
    )
}

export default CurrentWeather;