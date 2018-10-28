import { FETCH_POSTS } from '../actions/index';
import { stat } from 'fs';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // action.payload.data must be transformed so that the key of the object property, is the id
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
