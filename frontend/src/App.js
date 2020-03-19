import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Mapping from "./pages/Mapping";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <SnackbarProvider>
            <BrowserRouter>
                <Switch>
                    <Route path={'/orders/:id/mapping'} component={Mapping} exact={true}/>
                </Switch>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

export default App;
