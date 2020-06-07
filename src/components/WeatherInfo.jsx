import React from 'react'
import './WeatherInfo.css'


const Forecast = (props) => {
    return (
        <div className='forecast'>
            <div className='currentWeather'>
                <ul className='contentList'>
                    <li>Temp: <div className='temp'>{props.temp}</div></li>
                    <li>Sensação Térmica: <div className='temp'>{props.feelsLike}</div></li>
                    <li>Mínima: <div className='temp'>{props.minTemp}</div></li>
                    <li>Máxima: <div className='temp'>{props.maxTemp}</div></li>
                    <br></br>
                    <li id='city'>{props.city}</li>
                </ul>

            </div>
            <div>
                {props.forecastInfo}
            </div>
        </div>
    )
}


export default Forecast