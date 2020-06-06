import React, {useState} from 'react';
import unsplash from './api/unsplash'
import Forecast from './components/WeatherInfo'
import getWeather from './api/openweather'
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
    feelsLike: '..',
    minTemp: '...',
    maxTemp: '...'
  })
 const handleSearch = (e) => {
  setTerm({term: e.target.value})
 }

 const getImage = async () => {
  const response = await unsplash.get('/search/photos', {
    params: { query: term.term}
  })
  const randImage = Math.floor(Math.random() * 11)

  let imageBg

  if (response.data.results[randImage] !== undefined) {
    imageBg = response.data.results[randImage].urls.regular
  }
  setImage({image: imageBg})
  getWeather(term.term).then(data => {
    const weatherResponse = data.data.main
    setWeather({
      temp: Math.floor(weatherResponse.temp - 273.15) + 'ºC',
      feelsLike: Math.floor(weatherResponse.feels_like - 273.15) + 'ºC',
      minTemp: Math.floor(weatherResponse.temp_min - 273.15) + 'ºC',
      maxTemp: Math.floor(weatherResponse.temp_max - 273.15) + 'ºC'
    })
    console.log(weatherResponse)
  }).catch(err => {
    alert(err)
  }) 
 }




 const onSearch = (e) => {
  e.preventDefault()
  getImage()
}
  


return (
  <div className='bg-wrapper fadeImage' style={{backgroundImage: `url(${images.image})` }}>    
    <div className="App">

      <h1 id='title'>Clima Agora</h1>
      <Forecast
          temp={weather.temp}
          feelsLike={weather.feelsLike}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
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
