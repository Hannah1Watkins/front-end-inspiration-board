import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarbiePage from './pages/BarbiePage';
import OppenheimerPage from './pages/OppenheimerPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact element={<HomePage/>} />
                <Route path='/BarbiePage' exact element={<BarbiePage/>} />
                <Route path='/OppenheimerPage' exact element={<OppenheimerPage/>} />
            </Switch>
        </Router>
    );
}

export default App;
