import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../commons/Theme/index";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../../components/layouts/header';
import Loading from '../../components/globalloading/index';
const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Header />
                        <Loading/>
                        <ToastContainer />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
