import { createStore, combineReducers } from 'redux';
import user from './reducers/user';

const store = createStore(combineReducers({user}), {});

export default store;