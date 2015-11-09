/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

interface Props {
    message: string
};

class HelloWorld extends React.Component<Props, {}> {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

export default HelloWorld;