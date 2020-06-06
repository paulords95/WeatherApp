import axios from 'axios'


const getWeather = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddc47330ee9183502ddd5a1100417eb7`)
    return (
        response
    )
}


export default getWeather