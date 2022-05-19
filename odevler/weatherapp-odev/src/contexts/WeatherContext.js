import { createContext, useContext, useState } from "react";
import citiesJSON from '../data/cities.json';
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState(citiesJSON[19]);
    const [weather, setWeather] = useState([]);
    const days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
    ];
    const values = {
        city,
        setCity,
        citiesJSON,
        weather,
        setWeather,
        days
    }



    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);