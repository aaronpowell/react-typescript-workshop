/// <reference path="../../typings/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />

import * as React from 'react';
import { render } from 'react-dom';
import * as Router from 'react-router';
import App from './App';
import BookListPage from './BookListPage';
import BookPage from './BookPage';

let { Route, HistoryLocation } = Router;

const routes = (
  <Route handler={App}>
    <Route path="/" handler={BookListPage} />,
    <Route path="/:id" handler={BookPage} />
  </Route>
);

Router.run(routes, HistoryLocation, (Handler, state) => render(<Handler />, document.getElementById('main')));
