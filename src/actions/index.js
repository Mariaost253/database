export const SET_BOOKS ='SET_BOOKS';

export function setBooks(books){
    return{
        type: SET_BOOKS,
            books
    }
}