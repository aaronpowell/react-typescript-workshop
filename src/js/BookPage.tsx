/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

interface BookPageParams {
    params: {
        id: number
    }
}

class BookPage extends React.Component<BookPageParams, {}> {
    render() {
        return <h1>Book</h1>;
    }
}

export default BookPage;
