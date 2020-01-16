import axios from 'axios';

export default ({
  getBrowseList: () => {
    return new global.Promise((resolve, reject)=> {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },
  getSearchList: () => {
    return new global.Promise((resolve, reject)=> {
      axios.get("https://jsonplaceholder.typicode.com/users/")
        .then(response => {
          return resolve(response.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  },


})