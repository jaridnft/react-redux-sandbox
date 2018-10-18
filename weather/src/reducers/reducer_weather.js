import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // can't use state.push() here, as you're directly modifying state
      // instead, create a new array and return that instead
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city] ]
  }
  return state;
}
