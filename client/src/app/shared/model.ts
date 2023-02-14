export interface ICoord {
    lon: number;
    lat: number;
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
    temp_max: number;
}

export interface IWind {
    windSpeed: number;
    windDegree: number;
}

export interface IClouds {
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
coord:ICoord;
weather: IWeather[];
base:string;
main: IMain;
visibility: number;
wind: IWind;
cloud: IClouds;
dt: number;
sys: ISys;
timezone: number
id: number
name: string;
cod: number
}