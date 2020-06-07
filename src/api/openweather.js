import axios from 'axios'


const getWeather = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=APIAuthentication`)
    return (
        response
    )
}


export default getWeather