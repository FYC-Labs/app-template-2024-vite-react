/* eslint-disable no-unreachable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@src/scss/style.scss';
import UiKit from '@src/components/views/UiKit';
import NotFound from '@src/components/views/NotFound';
import Home from '@src/components/views/Home';
import PublicRoutes from '@src/components/global/PublicRoutes';
import PrivateRoutes from '@src/components/global/PrivateRoutes';
import ContentWrapper from './components/global/ContentWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-kit" element={<UiKit />} />
        <Route path="*" element={<NotFound />} />
        {/* NOTE: public routes nest inside this Route */}
        <Route
          element={
            <ContentWrapper>
              <PublicRoutes />
            </ContentWrapper>
          }
        >
          <Route path="/public" element={<h1>Public Route</h1>} />
        </Route>
        {/* NOTE: private routes nest inside this Route */}
        <Route
          element={
            <ContentWrapper>
              <PrivateRoutes />
            </ContentWrapper>
          }
        >
          <Route path="/private" element={<h1>Private Route</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
