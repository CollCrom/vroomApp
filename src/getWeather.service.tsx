import { WeatherReport } from "./app.interface";

export const getWeather = (longitude: number, latitude: number, forecast: boolean = false): Promise<WeatherReport> | any => {
    const url = `https://api.openweathermap.org/data/2.5/${forecast ? 'forecast' : 'weather'}?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
    return fetch(url)
        .then(res => res.json())
        .then(
            (response) => {
                return response;
            },
            (error) => {
                console.warn(error)
        })
}