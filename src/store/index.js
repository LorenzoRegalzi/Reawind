
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import multiWeatherReducer from './reducers/multiWeatherReducers';
import monthWeatherReducer from './reducers/monthWeatherReducers';

const rootReducer = combineReducers({
  weather: weatherReducer,
  multiWeather: multiWeatherReducer,
  monthWeather: monthWeatherReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;