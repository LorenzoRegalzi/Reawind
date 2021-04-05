import { GET_MONTHWEATHER, SET_ERROR } from '../types';

const initialState = {
  data: null,
  error: '',
};

const fn = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHWEATHER:
      return {
        data: action.payload,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fn;