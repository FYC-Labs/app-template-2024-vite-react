import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
    <Row className="text-center">
      <Col>
        <h1>Hello!</h1>
        <Link to="/ui-kit">Go to Ui-Kit</Link>
      </Col>
    </Row>
  </Container>
);

export default Home;
