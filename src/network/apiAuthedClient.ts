import axios from 'axios'
import { getCookie } from './helpers/NetworkHelper'

const axiosAuthedClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('access_token')}`
  }
})

axiosAuthedClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    let res = error.response
    console.error('Looks like there was a problem. Status Code: ' + res.status)
    return Promise.reject(error)
  }
)

export default axiosAuthedClient
