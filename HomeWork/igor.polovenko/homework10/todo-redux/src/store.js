import todoAppReducer from './reducer';
import { createStore } from 'redux';

export default createStore(todoAppReducer);