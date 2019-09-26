
import checkPropTypes from 'check-prop-types';
import  {applyMiddleware, createStore} from 'redux'
import rootReducer from '../src/reducer/index'
import { middleWare} from './../src/createStore';

export const findByTestAttr = (component, attr ) => {


    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}


export const checkProps =  ( component, expectedProps ) => {

    const propsError = checkPropTypes(component.propTypes, expectedProps,'props')
    return propsError;
}

export const testStore = (initialState ) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState)
}