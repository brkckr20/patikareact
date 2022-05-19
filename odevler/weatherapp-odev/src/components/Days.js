import { useEffect } from 'react'
import { useWeather } from '../contexts/WeatherContext'
import axios from 'axios';
const Days = () => {

    const api_key = 'ff1f28f9491f246a408b000902acf985';
    const { city, days, weather, setWeather } = useWeather()
    city.daily = []
    useEffect(() => {
        city.daily = [];
    }, [])


    useEffect(() => {
        const getWeather = async () => {
            const { data } = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`);
            setWeather(data.daily);
        }
        getWeather();
    }, [city])

    return (
        <div className='mt-2'>
            <div className='row'>
                {
                    weather.map((item, i) => (
                        <div className='col-lg-3 mb-2' key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        alt={`weather-icon "${i}"`}
                                    />
                                    <h5 className="card-title">Durum : {item.weather[0].main}</h5>
                                    <p className="card-text">{days[
                                        new Date(item.dt * 1000).getDay()
                                    ].toUpperCase()}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Days