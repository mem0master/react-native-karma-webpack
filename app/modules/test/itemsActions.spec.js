// for more details, checkout : http://rackt.org/redux/docs/recipes/WritingTests.html
import * as actions from './itemsActions';
import * as types from './itemsActionsTypes';

describe('ItemsActions', () => {
    describe('AddItem', () => {
        it('should create an action to add an item', () => {

            const itemToCreate = "item sample";
            const expectedActions = {
                type : types.ADD_ITEM,
                name : itemToCreate
            };

            expect(actions.addItem(itemToCreate)).to.deep.equal(expectedActions);
        });
    });
})
