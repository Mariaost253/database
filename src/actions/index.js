export const SET_BOOKS = 'SET_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = ' EDIT_BOOK';


export function setBooks(books) {
    const action = {
        type: SET_BOOKS,
        books
    }
    return action;
}

export function addBookById(items) {
    const action = {
        type: ADD_BOOK,
        items
    }
    return action;
}

export function removeBookById(id) {
    const action = {
        type: REMOVE_BOOK,
        id
    }
    return action;
}

export function editBookById(item) {
    const action = {
        type: EDIT_BOOK,
        item
    }
    return action;
}
