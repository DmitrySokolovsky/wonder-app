import { combineReducers } from 'redux';
import { authReducer } from './Auth';

export const appReducers = combineReducers({
    AUTH: authReducer
});
