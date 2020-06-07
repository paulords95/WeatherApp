import React, { useState } from 'react';
import unsplash from './api/unsplash'
import Forecast from './components/WeatherInfo'
import getWeather from './api/openweather'
import getCityName from './api/geocode'
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  const [term, setTerm] = useState({
    term: ''
  })
  const [images, setImage] = useState({
    image: ''
  })

  const [weather, setWeather] = useState({
    temp: '...',
    feelsLike: '...',
    minTemp: '...',
    maxTemp: '...',
    city: ''
  })


  const test = () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      let currentLat = position.coords.latitude
      let currentLon = position.coords.longitude
      let currentCoords = `${currentLat},${currentLon}`
      const cityName = await getCityName(currentCoords)
      const currentWeather = await getWeather(cityName)
      console.log(currentWeather.data.main)
      if (weather.city === '') {
        setWeather({
          temp: Math.floor(currentWeather.data.main.temp - 273.15) + 'ºC',
          feelsLike: Math.floor(currentWeather.data.main.feels_like - 273.15) + 'ºC',
          minTemp: Math.floor(currentWeather.data.main.temp_min - 273.15) + 'ºC',
          maxTemp: Math.floor(currentWeather.data.main.temp_max - 273.15) + 'ºC',
          city: cityName
        })
      }
      console.log(cityName)
    })
  }

test()
 







  const handleSearch = (e) => {
    setTerm({ term: e.target.value })
  }

  const getImage = async () => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term.term }
    })
    const randImage = Math.floor(Math.random() * 11)

    let imageBg

    if (response.data.results[randImage] !== undefined) {
      imageBg = response.data.results[randImage].urls.regular
    }
    setImage({ image: imageBg })

    getWeather(term.term).then(async data => {
      const weatherResponse = data.data.main
      const cityCoodsLat = data.data.coord.lat
      const cityCoodsLon = data.data.coord.lon

      const cityCoordsAll = `${cityCoodsLat}, ${cityCoodsLon} `
      const cityName = await getCityName(cityCoordsAll)
      // console.log(cityName)
      setWeather({
        temp: Math.floor(weatherResponse.temp - 273.15) + 'ºC',
        feelsLike: Math.floor(weatherResponse.feels_like - 273.15) + 'ºC',
        minTemp: Math.floor(weatherResponse.temp_min - 273.15) + 'ºC',
        maxTemp: Math.floor(weatherResponse.temp_max - 273.15) + 'ºC',
        city: cityName
      })

    }).catch(err => {
      alert(err)
    })

  }




  const onSearch = (e) => {
    e.preventDefault()
    getImage()
  }



  return (
    <div className='bg-wrapper fadeImage' style={{ backgroundImage: `url(${images.image})` }}>
      <div className="App">

        <h1 id='title'>Clima Agora</h1>
        <Forecast
          temp={weather.temp}
          feelsLike={weather.feelsLike}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          city={weather.city}
        />
        <SearchBar
          searchSubmit={onSearch}
          search={handleSearch}
        />

      </div>
    </div>
  )
}

export default App;
