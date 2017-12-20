
import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { LocaleProvider } from 'antd';


useStrict(true);

const App = () => (
  <div className="App">
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}


// import React from "react";
// import ReactDOM from "react-dom";

// // import ModalsRenderer from "services/ModalService/ModalsRenderer";
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';

// const renderApp = () => {
//     // const App = require("views/App/App").default;

//     ReactDOM.render(
//         <LocaleProvider locale={enUS}>
//             Hello World
//         </LocaleProvider>,
//         document.getElementById("root")
//     );
// };

// // Hot Module Replacement API
// if (module.hot) module.hot.accept("views/App/App", renderApp);

// // Render the app for the first time
// renderApp();
