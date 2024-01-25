import { Navigate, Outlet } from 'react-router-dom';
import { $auth } from '@src/signals/global.signals';

const PublicRoutes = () => {
  if ($auth.value.isSignedIn && !$auth.value.isLoading) {
    return <Navigate to={`/?redirect=${window.location.pathname}`} />;
  }
  return <Outlet />;
};

export default PublicRoutes;
