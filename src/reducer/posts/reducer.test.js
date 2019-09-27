import { types } from "../../actions/types";

import postReducer from './reducer'
describe('Post Reducer ', () => {


    it('Should return default state ', () => {

        const newState = postReducer(undefined, {})
        // expect(newState).toEqual([])

    })

    it('Should return new state if receiving types ', () => {

        const posts = [{title : 'Test 1 '}, {title : 'Test 2 '}, {title : 'Test 3 '}]
        const newState = postReducer(undefined, {
            type: types.GET_POST,
            payload: posts 
        });

        expect(newState).toEqual(posts)
    })
})