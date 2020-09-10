//覆盖next js默认app.js
import App, { Container } from "next/app";
import "antd/dist/antd.css";
import Layout from "../components/layout.jsx";
import { Provider } from "react-redux";
import WithRedux from "../lib/with-redux.jsx";
class MyApp extends App {
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let pageProps;
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Layout>
          <Provider store={reduxStore}>
            <Component {...pageProps}></Component>
          </Provider>
        </Layout>
      </Container>
    );
  }
}
export default WithRedux(MyApp);
