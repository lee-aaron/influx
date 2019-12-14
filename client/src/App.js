import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { configureStore, history } from './store/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }

}

export default App;
