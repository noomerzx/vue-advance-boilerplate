import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: 'http://192.168.1.193:3000/api/',
  timeout: 1000
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
  }

  setHeader (header) {
    axiosInstance.defaults.headers = header
  }

  fetch (data) {
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

  request (type, url, data) {
    let promise = null
    switch (type) {
      case 'GET': promise = axios.get(url, { params: data }); break
      case 'POST': promise = axios.post(url, data); break
      case 'PUT': promise = axios.put(url, data); break
      case 'DELETE': promise = axios.delete(url, data); break
      default : promise = axios.get(url, { params: data }); break
    }
    return promise
  }
}

export default HttpRequest
