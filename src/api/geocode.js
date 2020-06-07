import axios from 'axios'
//const axios =  require('axios');


const getCityName = async (coords) => {
    let params =  {
        auth: 'APIAuthentication',
        locate: coords,
        json: '1'
      }
    const response = await axios.get('https://geocode.xyz', {params})
    return response.data.region
}


// getCityName('-25.3608418,-49.0918268').then(cityName => {
//     console.log(cityName)
// })

export default getCityName