import {  GET_MULTIWEATHER, SET_ERROR } from '../types';
import { openweathermap_api_key } from '../../config.json';


export const getMultiWeather = ( onSuccess = () => {}, onError = () => {}) => {

    return async dispatch => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/group?id=2643743,3169070&units=metric&appid=${openweathermap_api_key}`);
       
      
  
        if (!res.ok) {
          const resData = await res.json();
          throw new Error(resData.message);
        }
  
        const resData = await res.json();
      
        dispatch({
          type:  GET_MULTIWEATHER,
          payload: resData,
        });
        onSuccess();
      } catch (err) {
        dispatch(setError(err.message));
        onError();
      }
    };
  };



const setError = (err) => {
    return {
      type: SET_ERROR,
      payload: err,
    };
  };