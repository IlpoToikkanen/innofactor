import axios from 'axios'

// Service for acquiring municipalities from the API

// The path used for fetching data from API. Using proxy (see package.json)
const baseUrl = '/api/municipality'

// Requests all data from .../api/municipality. Returns response data
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }
