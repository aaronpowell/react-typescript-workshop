/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import bookService from './services/book';

interface Props {
    params: {
        id: number
    }
}

interface State {
    book?: BookList.Book
}

class BookPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {};

        bookService.getById(props.params.id)
            .then(book => this.setState({ book }));
    }

    render() {
        if (!this.state.book) {
            return null;
        }

        return (
            <div>
                <h1>{this.state.book.title}</h1>
            </div>
        );
    }
}

export default BookPage;
