import axios from 'axios'

const baseUrl = 'https://api.coincap.io/v2'

const getRequest = async (url: string, params: any) => {
  const headers = { 'Content-Type': 'application/json' }
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params,
        headers,
      })
      .then(res => {
        const data = res.data
        // console.log(JSON.stringify(data), url);
        resolve(data)
      })
      .catch(error => {
        console.error(error, url)
        reject(new Error(''))
      })
  })
}

const postRequest = async (url: string, data: any) => {
  const headers = { 'Content-Type': 'application/json' }
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data, { headers })
      .then(res => {
        const data = res.data
        // console.log(JSON.stringify(data), url);
        resolve(data)
      })
      .catch(error => {
        console.error(error, url)
        reject(new Error(''))
      })
  })
}

const putRequest = async (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, {
        headers: { 'Content-Type': 'application/octet-stream' },
      })
      .then(res => {
        // console.log(JSON.stringify(res.data), url);
        if (res.status === 200) resolve(true)
        else reject(new Error(''))
      })
      .catch(error => {
        console.error(error, url)
        reject(new Error(''))
      })
  })
}

const request = { get: getRequest, post: postRequest, put: putRequest }

export default request
