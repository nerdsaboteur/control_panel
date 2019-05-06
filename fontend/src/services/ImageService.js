import axios from 'axios'
import fs from 'fs'

// const ApiClient = axios.create({
//     baseURL: 'http://bit.ly/2mTM3nY',
//     withCredentials: false,
//     headers: {
//         responseType: 'stream'
//     }
// })

export default {
  getImage() {
    console.log('get image')

    axios({
      method: 'get',
      url: 'http://bit.ly/2mTM3nY',
      responseType: 'stream'
    })
      .then(function(response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace2.jpg'))
      })
      .catch(err => console.log('error :' + err))
  }
}
