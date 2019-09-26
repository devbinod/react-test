import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducer/index'


export const middleWare = [ReduxThunk]

export const applyMiddlewareWithStore = applyMiddleware(...middleWare)(createStore)
export const store = applyMiddlewareWithStore(RootReducer)