import {SET_BOOKS} from '../actions';
import {REMOVE_BOOK} from '../actions';
import {ADD_BOOK} from '../actions';
import {EDIT_BOOK} from '../actions';

function books(state =[], action) {
    switch (action.type) {
        case SET_BOOKS:
        let books=[...state, ...action.books];
            return books;
         case ADD_BOOK:
           return [...state,action.items];
        case REMOVE_BOOK:
        books=state.filter(item => item.id!== action.id );
        return books;
        case  EDIT_BOOK:
        let booking=state.find(book => book.id === action.item.id ? action.item : book);
        return [...state,booking];
        default:
        return state;
    }
}

export default books;


