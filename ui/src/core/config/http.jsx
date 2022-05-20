import axios from 'axios'
import { apiUrl } from './api'

export const http = axios.create({
  baseURL: apiUrl,
})