import {  GET_MONTHWEATHER, SET_ERROR } from '../types';
import { openweathermap_api_key } from '../../config.json';


export const getMonthWeather = ( onSuccess = () => {}, onError = () => {}) => {

    return async dispatch => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.4643&lon=9.1895&units=metric&appid=${openweathermap_api_key}`);
       
      
  
        if (!res.ok) {
          const resData = await res.json();
          throw new Error(resData.message);
        }
  
        const resData = await res.json();
      
        dispatch({
          type:  GET_MONTHWEATHER,
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