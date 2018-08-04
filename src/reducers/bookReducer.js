import {SET_BOOKS} from "../actions";
//import Immutable from 'seamless-immutable';

//const defaultState = Immutable({
//    books: []
//});

function books(state =[], {type, payload}) {
    switch (type) {
        case SET_BOOKS:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default books;



