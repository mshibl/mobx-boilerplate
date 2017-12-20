import React from "react";
import ReactDOM from "react-dom";

import { LocaleProvider } from 'antd';
import { useStrict } from "mobx";
import enUS from 'antd/lib/locale-provider/en_US';

useStrict(true);

const renderApp = () => {
    const App = require("App").default;

    ReactDOM.render(
        <LocaleProvider locale={enUS}>
            <App />
        </LocaleProvider>,
        document.getElementById("root")
    );
};

// Hot Module Replacement API
if (module.hot) module.hot.accept("App", renderApp);

// Render the app for the first time
renderApp();
