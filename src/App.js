import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Mission from './components/Mission';
import Cards from './components/Cards';
import QuestionsPage from './pages/QuestionsPage'
import HowToPlayPage from './pages/HowToPlayPage'
import ContactPage from './pages/ContactPage'
import CreatorsPage from './pages/CreatorsPage'
import Footer from './components/Footer';
import FaqPage from './pages/FaqPage';
import DedicationsPage from './pages/DedicationsPage';

const themeLight = createMuiTheme({
    palette: {
        background: {
            default: '#D3D3D3',
        },
        text: {
            secondary: '#000000DE',
            fontFamily: `'Poppins', sans-serif'`
        },
    },
    typography: {
        fontFamily: `'Poppins', sans-serif`, 
        fontSize: '2rem'
    }
});


const App = () => {

    return (
        <>
            <MuiThemeProvider theme={themeLight}>
            <BrowserRouter>
                <Switch>
                        <Route exact path="/">
                                <CssBaseline />
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
                    <Route path="/dedicationsPage">
                        <DedicationsPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            </MuiThemeProvider> 
        </>
    );
};


export default App;

