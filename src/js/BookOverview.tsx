/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="services/book.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />

import * as React from 'react';
import { Link } from 'react-router';

interface Props {
    book: BookList.Book,
    key: any
}

class BookOverview extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <h2><Link to="book-page" params={{ id: this.props.book.id }}>{this.props.book.title}</Link></h2>
            </div>
        );
    }
}

export default BookOverview;
