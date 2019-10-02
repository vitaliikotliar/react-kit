import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import rootSaga from './saga';
import Index from './containers/Index';
import Users from './containers/Users';
import './style/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const { store, persistor } = configureStore();
store.runSaga(rootSaga);

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className='page'>
            <Route exact path='/' component={Index} />
            <Route exact path='/users' component={Users} />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
