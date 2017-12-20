import React from "react";
import Routes from "./routes";
import LayoutWrapper from "components/LayoutWrapper"

class App extends React.Component {
    render(){
        return (
            <LayoutWrapper>
                <Routes />
            </LayoutWrapper>
        )
    }
}

export default App;