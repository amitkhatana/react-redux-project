import { combineReducers } from 'redux';
import FReducer from './FReducer';

export default combineReducers({
  posts: FReducer
});