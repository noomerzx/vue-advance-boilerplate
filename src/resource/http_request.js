import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

class HttpRequest {
  constructor (url) {
    this.serviceUrl = url
    // axiosInstance.defaults.headers = {}
  }

  retrieve (data) {
    return axiosInstance.get(this.serviceUrl, {
      params: data
    })
  }

  create (data) {
    return axiosInstance.post(this.serviceUrl, data)
  }

  update (id, data) {
    return axiosInstance.put(this.serviceUrl + '/' + id, data)
  }

  delete (id) {
    return axiosInstance.delete(this.serviceUrl + '/' + id)
  }
}

export default HttpRequest
