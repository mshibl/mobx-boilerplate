import React from "react";
import { Layout } from "antd";
import NavBar from "./NavBar"
import AppFooter from "./Footer"
const { Header, Content, Footer } = Layout;

class LayoutWrapper extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <NavBar />
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    <AppFooter />
                </Footer>
            </Layout>
        );
    }
}

export default LayoutWrapper;
