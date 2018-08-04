import {SET_BOOKS} from "../actions";
//import Immutable from 'seamless-immutable';

//const defaultState = Immutable({
//    books: []
//});

//{type, payload}
function books(state =[], action) {
    switch (action.type) {
        case SET_BOOKS:
            return [...state, action.books];

        default:
            return state;
    }
}

export default books;



