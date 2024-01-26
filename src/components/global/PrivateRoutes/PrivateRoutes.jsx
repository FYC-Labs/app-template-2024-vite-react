import { Outlet, Navigate } from 'react-router-dom';
import { $auth } from '@src/signals/global.signals';
import ContentWrapper from '../ContentWrapper';

const PrivateRoutes = () => {
  if (!$auth.value.isSignedIn && !$auth.value.isLoading) {
    return <Navigate to={`/?redirect=${window.location.pathname}`} />;
  }
  return (
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  );
};

export default PrivateRoutes;
