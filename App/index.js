
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from "mobx-react";



// const App = () => (
//   <div className="App">
//     <h1 className="App-Title">Hello Parcel x React</h1>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

// // Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
// }


import React from "react";
import ReactDOM from "react-dom";

import { LocaleProvider } from 'antd';
import { useStrict } from "mobx";
import enUS from 'antd/lib/locale-provider/en_US';

useStrict(true);

const renderApp = () => {
    ReactDOM.render(
        <LocaleProvider locale={enUS}>
            Hello World
        </LocaleProvider>,
        document.getElementById("root")
    );
};

// Hot Module Replacement API
if (module.hot) module.hot.accept("views/App/App", renderApp);

// Render the app for the first time
renderApp();
