import { combineReducers } from 'redux';
import { counterReducer as counter } from './Counter';
import { gitReducer as git } from './Git';

const rootReducer = combineReducers({ counter, git });

export default rootReducer;
