/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="services/book.d.ts" />

import * as React from 'react';
import BookOverview from './BookOverview';
import bookService from './services/book';

interface State {
    books: BookList.Book[]
}

class BookListPage extends React.Component<{}, State> {
    constructor() {
        super();

        this.state = { books: [] };

        bookService.getAll()
            .then(books => this.setState({ books }));
    }

    render() {
        return (
            <div>
                <h1>Book List</h1>
                {this.state.books.map(book => <BookOverview book={book} key={book.id} />)}
            </div>
        );
    }
}

export default BookListPage;
