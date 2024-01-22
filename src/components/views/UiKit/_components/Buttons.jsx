import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const Buttons = () => (
  <Row className="text-center" id="buttons">
    <Col sm={{ span: 6, offset: 3 }}>
      <h2 className="text-decoration-underline">Buttons</h2>
      <div className="d-flex justify-content-around">
        <Button variant="info" className="mb-8">Solid Button</Button>
        <Button variant="outline-info" className="mb-8">Outline Button</Button>
      </div>
      <Row className="mb-8">
        <Button size="lg" variant="danger">Large Button</Button>
      </Row>
      <Row className="mb-8">
        <Button variant="danger">Medium Button</Button>
      </Row>
      <Row className="mb-8">
        <Button size="sm" variant="danger">Small Button</Button>
      </Row>
      <Row>
        <ButtonGroup className="p-0">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Row>
    </Col>
  </Row>
);

export default Buttons;
