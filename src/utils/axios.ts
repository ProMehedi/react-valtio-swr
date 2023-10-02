import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const fetcher = (url: string) => Axios.get(url).then((res) => res.data)
