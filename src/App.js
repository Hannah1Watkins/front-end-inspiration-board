import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarbiePage from './pages/BarbiePage';
import OppenheimerPage from './pages/OppenheimerPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/BarbiePage' element={<BarbiePage/>} />
                <Route path='/OppenheimerPage' element={<OppenheimerPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
