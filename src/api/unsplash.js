import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6o-XQ7CY17_X8Ac9cpd63oMU2tTNChEWW7K21DStWBM'
  }
})