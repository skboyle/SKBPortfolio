import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import FeedbackLoop from './components/FeedbackLoop';
import ReactCalculator from './components/ReactCalculator';
import ZipCodeCalculator from './components/ZipCodeCalculator';
import './styles/styles.css';

const App: React.FC = () => {
  return (
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback-loop" element={<FeedbackLoop />} />
          <Route path="/react-calculator" element={<ReactCalculator />} />
          <Route path="/zip-code-calculator" element={<ZipCodeCalculator />} />
          <Route path="*" element={<About />} />
        </Routes>
      </div>
  );
};

export default App;
