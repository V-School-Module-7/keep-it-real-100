import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Social from './Social';
import Header from './Header';
import Mission from './Mission';
import Cards from './Cards';
// import 'typeface-cormorant';
// import './App.css';

const themeLight = createMuiTheme({
    palette: {
        //     background: {
        //         default: '#9BC0FF',
        //     },
        //     text: {
        //         primary: '#000000DE',
        //     },
        // },
        type: 'light',
        primary: {
            main: '#ab47bc',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#f3e5f5',
            default: '#e1bee7',
        },
    },
});

const themeDark = createMuiTheme({
    palette: {
        background: {
            // default: '#D7A8DF',
            default: 'main',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});

const App = () => {
    const [light, setLight] = React.useState(true);
    return (
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
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
