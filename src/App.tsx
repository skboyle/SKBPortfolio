import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LinkBar from './components/LinkBar';
import About from './components/About';
import FeedbackLoop from './components/FeedbackLoop';
import ReactCalculator from './components/ReactCalculator';
import ZipCodeCalculator from './components/ZipCodeCalculator';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
        <Route path="/*" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback-loop" element={<FeedbackLoop />} />
          <Route path="/react-calculator" element={<ReactCalculator />} />
          <Route path="/zip-code-calculator" element={<ZipCodeCalculator />} />
        </Routes>
        <LinkBar />
      </div>
    </Router>
  );
};

export default App;
