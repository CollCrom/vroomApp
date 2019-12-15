export const AppInitState: LocalCoordinates = {
    coords: {
        longitude: 0,
        latitude: 0
    }
}

export const CurrentWeatherInitState: CurrentWeatherState = {
    name: '',
    main: {
        feels_like: 0,
        humidity: 0,
        temp: 0,
        pressure: 0,
        temp_max: 0,
        temp_min: 0
    },
    weather: []
}

export interface CurrentWeatherState {
    name: string;
    main: WeatherMain;
    weather: WeatherArray[]
}

export interface WeatherMain {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherReport {
    base: string;
    clouds: {
        all: number
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    }
    dt: number;
    id: number;
    main: WeatherMain;
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    }
    timezone: number;
    visibility: number;
    weather: WeatherArray[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    }
}

export interface WeatherArray {
    description: string;
    icon: string;
    id: number;
    main: string;
}
export interface LocalCoordinates {
    coords: {
        longitude: number;
        latitude: number;
    }
}

export interface WeatherProps {
    longitude: number;
    latitude: number;
}