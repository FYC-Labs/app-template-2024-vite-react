/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@src/scss/style.scss';
import UiKit from '@src/components/views/UiKit';
import NotFound from '@src/components/views/NotFound';
import Home from '@src/components/views/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ui-kit" element={<UiKit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
