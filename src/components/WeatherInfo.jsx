import React from 'react'
import './WeatherInfo.css'


const Forecast = (props) => {
    return (
        <div className='forecast'>
            <div className='currentWeather'>
                <ul className='contentList'>
                    <li>Temp: {props.temp}</li>
                    <li>Sensação Térmica: {props.feelsLike}</li>
                    <li>Mínima: {props.minTemp}</li>
                    <li>Máxima: {props.maxTemp}</li>
                </ul>

            </div>
            <div>
                {props.forecastInfo}
            </div>
        </div>
    )
}


export default Forecast