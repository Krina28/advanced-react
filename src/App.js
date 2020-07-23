import React, { Component } from "react";
import Routes from "./routes";
import configureStore from "./redux/store";

import { Provider as ReduxProvider } from "react-redux";
import Header from "./common/header";

//configuring store
const reduxStore = configureStore();

class App extends Component {
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
