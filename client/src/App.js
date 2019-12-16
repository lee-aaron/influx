import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { configureStore, history } from './store/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';
import background from './background.jpg'

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <img src={background} className="App-background" alt=""/>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }

}

export default App;
