import axios from 'axios';
import {
  PROJECTINFO
} from './types';

const api = 'https://peaceful-tor-89083.herokuapp.com/api'

export const projectInfo = () => {
    console.log('triggered')
    return (dispatch) => {
        axios.get(`${api}`)
        .then(response => response)
        .then(data => {
            dispatch({
              type: PROJECTINFO,
              payload: data.data,
            });
        })
    }
}

