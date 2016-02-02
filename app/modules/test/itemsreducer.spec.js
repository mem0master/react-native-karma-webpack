// for more details, checkout : http://rackt.org/redux/docs/recipes/WritingTests.html

import ItemsReducer from './itemsreducer';
import Uuid from 'utils/uuid';


describe('Item reducer', () =>{

    describe('Default call', ()=> {

        it('should return an empty state object in case no action has been provided', () => {

            expect(ItemsReducer(),{type:"NOTHING"}).to.be.an('array');

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

            expect(ItemsReducer(initialState,action)).to.deep.equal(newState);

        })

    });


    //etc.
});
