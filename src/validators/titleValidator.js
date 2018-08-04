export const getBookById = (bookId, books) => (
    books.find((book) => (book.id === bookId))
);

export const normalizeTitle = (title) => (
    title.replace(/[^a-zA-Z\d\s:]/g, '')
);