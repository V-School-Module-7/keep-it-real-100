import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Social from './components/Social';
import Header from './components/Header';
import Mission from './components/Mission';
import Cards from './components/Cards';
import QuestionsPage from './pages/QuestionsPage'
import HowToPlayPage from './pages/HowToPlayPage'
import ContactPage from './pages/ContactPage'
import CreatorsPage from './pages/CreatorsPage'
import Footer from './components/Footer';
import FaqPage from './pages/FaqPage';
import { ClassNames } from '@emotion/react';

const themeLight = createMuiTheme({
    palette: {
        background: {
            default: '#D3D3D3',
        },
        text: {
            secondary: '#000000DE',
        },
    },
});

const themeDark = createMuiTheme({
    palette: {
        background: {
            default: '#002984',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});

const App = () => {

    const [light, setLight] = React.useState(true);
    return (
        <>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
            <BrowserRouter>
                <Switch>
                        <Route exact path="/">
                                <CssBaseline />
                                {/* <Button
                                    onClick={() => setLight((prev) => !prev)}
                                    variant="outlined"
                                >
                                    TOGGLE
                                </Button> */}
                                {/* <Social /> */}
                                <Header />
                                <Mission />
                                <Cards />
                                <Footer />
                        </Route>
                    <Route path="/kir-game/:gameId">
                        <QuestionsPage />
                    </Route>
                    <Route path="/howToPlay">
                        <HowToPlayPage />
                    </Route>
                    <Route path="/contactPage">
                        <ContactPage />
                    </Route>
                    <Route path="/creators">
                        <CreatorsPage />
                    </Route>
                    <Route path="/faqPage">
                        <FaqPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            </MuiThemeProvider> 
        </>
    );
};


export default App;

