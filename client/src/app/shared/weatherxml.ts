export interface Result {
    Title:      string;
    Coord:      Coord;
    Weather:    ResultWeather;
    Base:       string;
    Main:       Main;
    Visibility: string;
    Wind:       Wind;
    Clouds:     Clouds;
    Dt:         string;
    Sys:        Sys;
    Id:         string;
    Cod:        string;
}

export interface Clouds {
    All: string;
}

export interface Coord {
    Longitude: string;
    Latitude:  string;
}

export interface Main {
    Temperature:        string;
    Pressure:           string;
    Humidity:           string;
    MinimumTemperature: string;
    MaximumTemperature: string;
}

export interface Sys {
    Type:    string;
    Id:      string;
    Message: string;
    Country: string;
    Sunrise: string;
    Sunset:  string;
}

export interface ResultWeather {
    Weather: WeatherWeather;
}

export interface WeatherWeather {
    Id:          string;
    Visibility:  string;
    Description: string;
    Icon:        string;
}

export interface Wind {
    WindSpeed:  string;
    WindDegree: string;
}