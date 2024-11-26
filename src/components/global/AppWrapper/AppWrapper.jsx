/* eslint-disable implicit-arrow-linebreak */
import useWindowSize from '@src/utils/windowSize';
import { Badge, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AppWrapper = () => {
  const { breakPoint } = useWindowSize();
  return (
    <Container fluid className="p-0">
      {import.meta.env.VITE_DEV_IS_BREAKPOINT_VISABLE === 'true' && (
      <Badge bg="primary" className="breakpointBadge">
        {breakPoint}
      </Badge>
      )}
      <Outlet />
    </Container>
  );
};

export default AppWrapper;
