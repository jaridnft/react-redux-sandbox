import { FETCH_POSTS, FETCH_POST } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // add new property with value "id" to ...state
      return { ...state, [action.payload.data]: 'id' };
    case FETCH_POSTS:
      // action.payload.data must be transformed so that the key of the object property, is the id
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
