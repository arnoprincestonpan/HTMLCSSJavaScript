import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Header';
import Login from './Pages/Login';
import UseToken from './UseToken';
import Visitor from './Visitor';

function App() {
    const { token, setToken } = UseToken(); // use the token from UseToken.js
    console.log(token)
    if (token == null) {
        return (
            <>
                <Login setToken={setToken} token={token} />
                <Visitor />
            </>
        )
    } else {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<>
                        <Header />
                        <Dashboard />
                    </>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        )
    }
}

export default App