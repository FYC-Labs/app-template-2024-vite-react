import { Row, Col, Card } from 'react-bootstrap';

const Colors = () => (
  <Row className="text-center" id="colors">
    <Col sm={{ span: 6, offset: 3 }}>
      <h2 className="text-decoration-underline">Colors</h2>
      primary - #hex
      <Card className="bg-primary p-8" />
      <hr />
      secondary - #hex
      <Card className="bg-secondary p-8" />
      <hr />
      info - #hex
      <Card className="bg-info p-8" />
      <hr />
      danger - #hex
      <Card className="bg-danger p-8" />
      <hr />
      success - #hex
      <Card className="bg-success p-8" />
      <hr />
      Add more if needed - #hex
      <Card className="bg-primary p-8" />
      <hr />
    </Col>
  </Row>
);

export default Colors;
