export const getWeather = (longitude: number, latitude: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.warn(error)
        })
}