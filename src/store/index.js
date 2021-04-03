
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import multiWeatherReducer from './reducers/multiWeatherReducers';

const rootReducer = combineReducers({
  weather: weatherReducer,
  multiWeather: multiWeatherReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;