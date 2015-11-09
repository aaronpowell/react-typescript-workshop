/// <reference path="../../typings/react-dom/react-dom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld message="Hey there" />, document.getElementById('main'));
