import Intro from './pages/Intro';
import Info from './pages/Info';
import Analysis from './pages/Analysis';
import PhotoUpload from './pages/PhotoUpload';
import Results from './pages/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/info" element={<Info />} />
        <Route path="/upload" element={<PhotoUpload />} />
        <Route path="/results" element={<Results />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  )
}

export default App
