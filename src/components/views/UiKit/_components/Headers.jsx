import { Row, Col } from 'react-bootstrap';

const Headers = () => (
  <Row className="text-center" id="headers">
    <Col>
      <h2 className="text-decoration-underline">Headers</h2>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>p</p>
      <small>small</small>
    </Col>
  </Row>
);

export default Headers;
