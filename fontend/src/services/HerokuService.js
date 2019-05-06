import axios from 'axios'

const ApiClient = axios.create({
  baseURL: 'https://mp-personal-planner.herokuapp.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getImage() {
    return ApiClient.get('/events')
  },
  getEvent(id) {
    return ApiClient.get('/events/' + id)
  },
  postEvent(event) {
    return ApiClient.post('/events', event)
  }
}
