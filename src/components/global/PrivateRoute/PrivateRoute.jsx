import { useRoutes, Navigate } from 'react-router-dom';
import { $auth } from '@src/signals/global.signals';
import ContentWrapper from '@src/components/global/ContentWrapper';

const PrivateRouteComponent = ({ element: Element, noNavbar, ...rest }) => {
  if (!$auth.value.isSignedIn && !$auth.value.isLoading) {
    window.location.href = `/?redirect=${window.location.pathname}`;
  }

  return (
    <ContentWrapper fluid className="min-vh-100 px-0">
      {!noNavbar && <div className="pb-40">{/* <NavBar /> */}</div>}
      <Element {...rest} />
    </ContentWrapper>
  );
};

const PrivateRoute = (props) => useRoutes([
  {
    path: props.path,
    element: <PrivateRouteComponent {...props} />,
    children: [{ index: true, element: <Navigate to={props.path} /> }],
  },
]);

export default PrivateRoute;
