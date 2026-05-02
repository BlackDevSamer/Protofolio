import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Soon from './pages/Soon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soon" element={<Soon />} />
      </Routes>
    </Router>
  );
}

export default App;
