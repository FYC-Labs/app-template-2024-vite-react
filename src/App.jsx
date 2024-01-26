/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@src/scss/style.scss';
import UiKit from '@src/components/views/UiKit';
import NotFound from '@src/components/views/NotFound';
import Home from '@src/components/views/Home';
import PublicRoutes from '@src/components/global/PublicRoutes';
import PrivateRoutes from '@src/components/global/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-kit" element={<UiKit />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PublicRoutes />}>
          {/* NOTE: public routes go here */}
          <Route path="/public" element={<h1>Public Route</h1>} />
        </Route>
        <Route element={<PrivateRoutes />}>
          {/* NOTE: private routes go here */}
          <Route path="/private" element={<h1>Private Route</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
