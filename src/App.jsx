/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@src/scss/style.scss';
import UiKit from '@src/components/views/UiKit';
import NotFound from '@src/components/views/NotFound';
import Home from '@src/components/views/Home';
import PublicRoute from '@src/components/global/PublicRoute';
import PrivateRoute from '@src/components/global/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ui-kit" element={<UiKit />} />
          <Route path="*" element={<NotFound />} />
          <PublicRoute path="/public" element={<div>public</div>} />
          <PrivateRoute path="/private" element={<div>private</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
