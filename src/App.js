import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Resume from './routes/Resume';

function App() {
    return (
        <div id="app">
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/resume' element={<Resume />}/>
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
