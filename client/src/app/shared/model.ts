export interface ICoord {
    longitude: number;
    latitude: number;
}

export interface IWeather {
    id: number;
    visibility: string;
    description: string;
    icon: string;
}

export interface IMain {
    temperature: number;
    pressure: number;
    humidity: number;
    minimumTemperature: number;
    maximumTemperature: number;
}

export interface IWind {
    windSpeed: number;
    windDegree: number;
}

export interface Clouds {
    all: number;
}

export interface ISys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}
export interface ICity {
coOrdinates:ICoord,
weather: IWeather,
main: IMain,
wind: IWind,
cloud: Clouds,
sys: ISys
}