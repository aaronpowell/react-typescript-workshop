/// <reference path="../../typings/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />

import * as React from 'react';
import { render } from 'react-dom';
import * as Router from 'react-router';
import HelloWorld from './HelloWorld';
import BookListPage from './BookListPage';

let Route = Router.Route;

const routes = (
  <Route path="/" handler={BookListPage} />
);

Router.run(routes, Handler => render(<Handler />, document.getElementById('main')));
