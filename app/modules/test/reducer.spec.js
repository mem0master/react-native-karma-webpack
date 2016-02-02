/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import Reducer from './reducer';
import Uuid from 'utils/uuid';


describe('Item reducer', () =>{

    describe('Default call', ()=> {

        it('should return an empty state object in case no action has been provided', () => {

            expect(Reducer(),{type:"NOTHING"}).to.be.an('array');

        });
    });

    describe('Adding an item',() => {

        it('should add an item to the state object while keeping it the reducer pure', () => {

            const initialState = [];

            const action = {
                type : 'ADD_ITEM',
                id : 0,
                text : 'First item'
            };

            const newState = [{
                id : 0,
                text : 'First item',
                isProccessed : false
            }];

            Object.freeze(initialState);
            Object.freeze(action);
            Object.freeze(newState);

            expect(Reducer(initialState,action)).to.deep.equal(newState);

        })

    });


    //etc.
});
