import { Row, Col, Card } from 'react-bootstrap';

const colors = [
  { name: 'primary', hex: '#01738f' },
  { name: 'secondary', hex: '#6c757d' },
  { name: 'success', hex: '#28a745' },
  { name: 'danger', hex: '#dc3545' },
  { name: 'warning', hex: '#c2b63e' },
  { name: 'info', hex: '#17a2b8' },
  { name: 'light', hex: '#f8f9fa' },
  { name: 'dark', hex: '#343a40' },
  { name: 'dark-300', hex: '#777676' },
  { name: 'grey', hex: '#EDEDED' },
];

const Colors = () => (
  <Row className="text-center d-flex justify-content-center mt-48" id="colors">
    <h1 className="text-decoration-underline mb-24">Colors</h1>
    {colors.map((color) => (
      <Col key={color.name} xs={6} md={3}>
        <Card className="mb-4">
          <Card.Body className="p-4">
            <div className="rounded" style={{ backgroundColor: color.hex, height: '100px' }} />
            <p className="mt-3 mb-0">{color.name}</p>
            <p className="text-muted">{color.hex}</p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Colors;
