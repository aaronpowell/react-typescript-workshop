/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import bookService from './services/book';

interface State {
    title?: string;
    authors?: string[];
    link?: string;
}

class AddPage extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            authors: []
        };
    }

    render() {
        return (
            <div>
                <h1>Add Book</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" id="title" value={this.state.title} onChange={this.setValue.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="authors">Author(s)</label>
                        <input className="form-control" type="text" name="authors" id="authors" value={this.state.authors.join(', ')} onChange={this.setAuthors.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input className="form-control" type="url" name="link" id="link" value={this.state.link} onChange={this.setValue.bind(this)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
                    {" "}
                    <button type="reset" className="btn btn-secondary" onClick={this.reset.bind(this)}>Reset</button>
                </form>
            </div>
        );
    }

    setValue(e: KeyboardEvent): void {
        var target = e.target as HTMLInputElement;

        this.setState({ [target.name]: target.value });
    }

    setAuthors(e: KeyboardEvent): void {
        var target = e.target as HTMLInputElement;

        this.setState({ authors: target.value.split(', ') });
    }

    save(e: KeyboardEvent) {
        e.preventDefault();
        let { title, authors, link } = this.state;
        if (title && authors.length && link) {
            bookService.save(title, authors, link)
                .then(book => window.location.href = `/${book.id}`);
        }
    }

    reset() {
        this.setState({
            title: '',
            authors: [],
            link: ''
        });
    }
}

export default AddPage;
