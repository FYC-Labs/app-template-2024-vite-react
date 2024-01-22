import { Row, Col, Button, Card } from 'react-bootstrap';

const Cards = () => (
  <Row className="text-center" id="cards">
    <h2 className="text-decoration-underline">Cards</h2>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Card.Link href="">Card Link</Card.Link>
          <Card.Link href="">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Cards;
