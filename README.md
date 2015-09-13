Redux Easy Boilerplate
=========================

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Run](#run)
- [Component generator](#component-generator)
  - [Simple component](#simple-generator)
  - [Complex component](#complex-generator)

## About
- [React 0.14.0-rc1](https://github.com/facebook/react)
- [Redux 3.0](https://github.com/gaearon/redux)
- [React Router 1.0.0-rc1](https://github.com/rackt/react-router)
- [Bootstrap Webpack](https://github.com/bline/bootstrap-webpack)
- Sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader))
- [jsx-control-statements](https://github.com/valtech-au/jsx-control-statements)
- [redux-logger](https://github.com/fcomb/redux-logger)

## Installation
```
$ npm install
```

## Run
```
$ npm start
```

And open in browser: [http://localhost:3000](http://localhost:3000)

## Component generator

### Simple generator

```
$ gulp simple-component --name SimpleComponent
```
Simple component looks like:

```js
import React, { Component } from 'react';

// Component styles
import styles from './<%= name %>.styles.js';

export default class <%= name %> extends Component {
  render() {
    return (
      <div className={styles}>
        <h2>
          ComponentName
        </h2>
      </div>
    );
  }
}
```

### Complex generator
```
$ gulp component --name ComplexComponent
```
Complex component looks like:

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import * as actionCreators from 'actions/<%= name %>';

@connect(state => state.<%= name %>)
export default class <%= name %> extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  render() {
    const { data } = this.props;

    return (
      <div className={styles}>
        <h2>
          <%= name %>
        </h2>
        <p>
          Data: {data}
        </p>
      </div>
    );
  }
}

```
Action file:
```js
export function example() {
  return {
    type: 'EXAMPLE',
  };
}
```

Reducer file:

```js
const initialState = { text: 'text' };

export function <%= name %>(state = initialState, action) {
  switch (action.type) {
  case 'EXAMPLE':
    return {
      ...state,
      text: "change"
    }

  default:
    return state;
  }
}
```
