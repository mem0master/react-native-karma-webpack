"use strict";

const Reducer = (state = [], action) => {

    if(action){
        switch(action.type){
            case 'ADD_ITEM':
                return [
                    ...state,
                    {
                        id : action.id,
                        text  : action.text,
                        isProccessed : false
                    }
                ];
            default:
                return state;
        }
    }else{
        return state;
    }
}

module.exports = Reducer;
