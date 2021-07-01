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

const themeLight = createMuiTheme({
    palette: {
        background: {
            default: '#9BC0FF',
        },
        text: {
            primary: '#000000DE',
        },
    },
});

const themeDark = createMuiTheme({
    palette: {
        background: {
            default: '#D7A8DF',
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
