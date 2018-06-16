import axios from 'axios';
import {
  LOGIN,
  LOGINSUCCESS,
  TOKENVALIDATION
} from './types';


const URL = 'http://localhost:3002/signup'
const TOKENURL = 'http://localhost:3002/token_validation'

const loginSuccess = () => {
    //history.push('/restricted')
    
}

export const login = (obj) => {
    console.log('Login Action = ',obj)
    return (dispatch) => {
        axios.post(`${URL}`, obj)
        .then(function (response) {
            loginSuccess()
            localStorage.setItem('Token', response.data.token); 
            // const tok = localStorage.getItem('Token')
            // console.log('check list post',tok);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export const tokenValidation = () => {
    const getToken = {token:localStorage.getItem('Token')}
    console.log('getToken = ',getToken)
    return (dispatch) => {
        axios.post(`${TOKENURL}`, getToken)
        .then(function (response) {
            //loginSuccess()
            localStorage.setItem('Token', response.data.token); 
            console.log('success')
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
