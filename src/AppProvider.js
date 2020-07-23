// import React, { Component } from 'react';
// import { AppContext } from './AppContext';

// export default class AppProvider extends Component {
//     constructor() {
//         super();
//         this.state = {
//             setAppData: this.setAppData.bind(this),
//             appData: {}
//         };
//     }

//     setAppData(appData) {
//         this.setState({ appData });
//     }

//     render() {
//         return (
//             <AppContext.Provider value={{
//                 appContext: {
//                     ...this.state
//                 }
//             }}>
//                 {this.props.children}
//             </AppContext.Provider>
//         )
//     }
// }
