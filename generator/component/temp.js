import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
// import { add, del } from '../../actions';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as <%= name %> } from './<%= name %>/<%= name %>.js';
//
// And to import component ./src/Main.js
// import { <%= name %> } from './components/';

export default class <%= name %> extends Component {
  render() {
    const { dispatch, items } = this.props;
    return (
      <div className={ styles } >
        Comonent
      </div>
    );
  }
}


let select = (state) => {
  return {
    items: state.items
  };
}

export default connect(select)(Items);
