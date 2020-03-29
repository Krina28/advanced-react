import React, { Component } from "react";
import Routes from './routes';
import configureStore from './redux/store';
import { Provider as ReduxProvider } from "react-redux";
import Header from './common/header';
import ModularService from './services/module.service'

//configuring store
const reduxStore = configureStore();

class App extends Component {
  componentDidMount = async () => {
    await ModularService.getAllCurrencyPairs().then((response) => {
      console.log('>>>res', response)
    }).catch((error) => {
      console.log('>>>error', error)
    })
  }

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <Header />
        <Routes />
      </ReduxProvider>
    );
  }
}

export default App;
