import {
  api_endpoint
} from '../const/config';
import store from '../store'
import Axios from "axios";

export const getAuthKey = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`${api_endpoint}/key`).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err)
    })
  });
}

export const loadData = () => {
  var authKey = store.getters['getAuthKey']
  return new Promise((resolve, reject) => {
    Axios.get(`${api_endpoint}/value`,{
      headers: {
        'Authorization': `${authKey}`
      }
    }).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err)
    })
  });
}
