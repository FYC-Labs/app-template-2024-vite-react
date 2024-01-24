import { useRoutes, Navigate } from 'react-router-dom';
import { $auth } from '@src/signals/global.signals';
import ContentWrapper from '@src/components/global/ContentWrapper';

const PublicRouteComponent = ({ element: Element, ...rest }) => {
  if ($auth.value.isSignedIn && !$auth.value.isLoading) {
    window.location.href = `/?redirect=${window.location.pathname}`;
  }

  return (
    <ContentWrapper fluid className="min-vh-100 px-0">
      <Element {...rest} />
    </ContentWrapper>
  );
};

const PublicRoute = props => useRoutes([
  {
    path: props.path,
    element: <PublicRouteComponent {...props} />,
    children: [{ index: true, element: <Navigate to={props.path} /> }],
  },
]);

export default PublicRoute;
