import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = "application/json";
//axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*";
export default ({
  getBrowseList: () => {
    return new global.Promise((resolve, reject)=> {
      //axios.get("https://jsonplaceholder.typicode.com/users")
      axios.get("https://swapi.co/api/people")
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },
  getBrowseNext: (url) => {
    return new global.Promise((resolve, reject)=> {
      axios.get(url)
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },
  getBrowsePrev: (url) => {
    return new global.Promise((resolve, reject)=> {
      axios.get(url)
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },
  getSearchList: (searchTerm) => {
    return new global.Promise((resolve, reject)=> {
      axios.get(`https://swapi.co/api/people/?search=${searchTerm}`)
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },


})