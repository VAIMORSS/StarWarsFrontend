import { GET_ALL_PEOPLE } from '../actions/types';

const initianState ={
    people:[],
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default function(state=initianState, action){
    switch(action.type){
        case GET_ALL_PEOPLE:
            return {
                ...state,
                people:action.payload
            }
        
        default:
            return state;
    }
}


