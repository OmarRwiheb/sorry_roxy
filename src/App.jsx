import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FunFacts from './components/FunFacts';
import ApologySection from './components/ApologySection';
import ForgiveButton from './components/ForgiveButton';
import Clouds from './components/Clouds';

function App() {
  return (
    <Router>
      <div className="App">
        <Clouds />
        <Routes>
          <Route path="/sorry_roxy" element={<Header />} />
          <Route path="/fun-facts" element={<FunFacts />} />
          <Route path="/apology" element={<ApologySection />} />
          <Route path="/forgiveness" element={<ForgiveButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
