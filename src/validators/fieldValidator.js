import {normalizeTitle} from './titleValidator';

const validateField = (fieldType, value, optionalParam) => {
    const validators = {
        bookTitle: () => validateTitle(normalizeTitle(value), optionalParam),
        authorName: () => validateAuthor(value)
    };

    return validators[fieldType]();
};

const validateTitle = (bookTitle, currentBooks = []) => (
    (!bookTitle.length && 'What is the books title?') ||
    (currentBooks.find((book) => (book.bookTitle.toLowerCase() === title.toLowerCase())) &&
        `Are you sure you don't have a book named '${bookTitle}' in your library?`)
);

const validateAuthor = (authorName) => (
    !authorName.length && 'Who could write such a wonderful book?'
);

export default validateField;