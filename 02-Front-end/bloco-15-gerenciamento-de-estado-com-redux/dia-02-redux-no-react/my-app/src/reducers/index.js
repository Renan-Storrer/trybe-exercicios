import { combineReducers } from 'redux';
import login from './login';
import registers from './registers';

const rootReducers = combineReducers({ registers, login });

export default rootReducers;
