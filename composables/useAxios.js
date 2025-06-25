import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://your-laravel-api.com/api', // fake API 
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
