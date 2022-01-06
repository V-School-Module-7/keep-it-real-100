import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Social from './Social';
import Header from './Header';
import Mission from './Mission';
import Cards from './Cards';
import QuestionsPage from './pages/QuestionsPage'
import HowToPlayPage from './pages/HowToPlayPage'

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
            <BrowserRouter>
                <Switch>
                        <Route exact path="/">
                            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                                <CssBaseline />
                                <Button
                                    onClick={() => setLight((prev) => !prev)}
                                    variant="outlined"
                                >
                                    TOGGLE
                                </Button>
                                <Social />
                                <Header />
                                <Mission />
                                <Cards />
                            </MuiThemeProvider>
                        </Route>
                    <Route path="/kir-game/:gameId">
                        <QuestionsPage />
                    </Route>
                    <Route path="/kir-game/howToPlay">
                        <HowToPlayPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};


export default App;

