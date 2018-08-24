import { createStore } from 'redux';
import { appReducers } from './reducers';

export const appStore = createStore(
    appReducers
);