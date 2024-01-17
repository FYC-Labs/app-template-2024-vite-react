import { Button, Container, Row } from 'react-bootstrap';

const Dashboard = () => (
  <Container fluid className="d-flex align-items-center justify-content-center">
    <Row>
      <h1>Hello, Bootstrap 5!</h1>
      <p>This is a test HTML file with Bootstrap 5.</p>
    </Row>
    <Row>
      <Button variant="danger">Hello world</Button>
      <Button variant="secondary">Hello world</Button>
    </Row>
  </Container>
);

export default Dashboard;
