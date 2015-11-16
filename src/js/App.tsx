/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />

import * as React from 'react';
import * as Router from 'react-router';

interface AppParams {
    params: {
        id?: number
    }
}

class App extends React.Component<AppParams, {}> {
    render() {
        return <Router.RouteHandler {...this.props} />;
    }
}

export default App;
