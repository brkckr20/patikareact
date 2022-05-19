import React from 'react'
import { useWeather } from '../contexts/WeatherContext'
const Dropdown = () => {

    const { setCity ,citiesJSON} = useWeather();

    const handleChange = (e) => {
        citiesJSON.filter(city => {
            if(city.name === e.target.value){
                setCity(city)
            }
        })
    }

    return (
        <div>
            <span>Şehir Seçiniz</span>
            <br />
            <select className='p-2' onChange={handleChange} defaultValue={"Denizli"} >
                {
                    citiesJSON.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown