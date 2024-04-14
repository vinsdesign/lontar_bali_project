import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/vinsdesign/lontar_bali_project',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLontars(perPage, page) {
    return apiClient.get('/lontar?_limit=' + perPage + '&_page' + page)
  },
  getLontar(id) {
    return apiClient.get('/lontar/' + id)
  }
}
