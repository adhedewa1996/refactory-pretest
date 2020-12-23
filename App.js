import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { AppStack } from './src/router'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import reducers from './src/_redux/reducers';

let store = createStore(reducers, {}, applyMiddleware(thunk));

class App extends Component {
  
  render(){

    const Layout = AppStack(true)

    return(
      <StoreProvider store={store}>
        <Layout />
      </StoreProvider>
    )
  }
}

export default App;
