import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export default store;