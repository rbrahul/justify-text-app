import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.js';
import { Provider } from 'react-redux';
import store from './stores/Store.js';
class App extends Component {
  render() {
    return (<Provider store={store}>
      <Container />
    </Provider>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
