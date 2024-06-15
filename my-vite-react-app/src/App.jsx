import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Home from './Components/Home';
import DineInContent from './Components/DineInContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dine" element={<DineInContent />} />
        {/* Add more routes for other components if needed */}
      </Routes>
    </Router>
  );
}

export default App;
