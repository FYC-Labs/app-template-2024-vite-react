/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@src/scss/style.scss';
import Dashboard from '@src/components/views/Dashboard';
import NotFound from '@src/components/views/NotFound';
import Home from '@src/components/views/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
