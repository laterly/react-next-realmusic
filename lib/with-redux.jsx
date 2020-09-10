import React from "react";
const isServer = typeof window === "undefined";
const NEXT_REDUX_STORE = "__NEXT_REDUX_STORE__";
import createStore from "../store/index.js";
const getOrCreateStore = (initialState) => {
  if (isServer) return createStore(initialState);
  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = createStore(initialState);
  }
  return window[NEXT_REDUX_STORE];
};
const WithRedux = (Comp) => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }
    render() {
      const { Component, pageProps, ...rest } = this.props;
      if (pageProps) pageProps.test = 123;
      return (
        <Comp
          Component={Component}
          pageProps={pageProps}
          {...rest}
          reduxStore={this.reduxStore}
        ></Comp>
      );
    }
  }

  WithReduxApp.getInitialProps = async (ctx) => {
    const reduxStore = getOrCreateStore();
    ctx.reduxStore = reduxStore; //给getInitialProps里的ctx赋值reduxStore
    let appProps = {};
    if (typeof Comp.getInitialProps === "function")
      appProps = await Comp.getInitialProps(ctx);
    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  };
  return WithReduxApp;
};
export default WithRedux;
