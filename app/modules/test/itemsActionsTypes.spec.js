import * as actions from './itemsActionsTypes';


describe('itemsActionsTypes', () => {
    it('should be an object', () => {
        expect(actions).to.be.an('object');
    });
    describe('ADD_ITEM', () => {
        it('should have ADD_ITEM as a constent', () => {
            expect(actions.ADD_ITEM).to.equal('ADD_ITEM');
        });
    });
});
