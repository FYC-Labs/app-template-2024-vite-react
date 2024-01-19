import { Button, Container, Row, Col, Card, Dropdown, Nav } from 'react-bootstrap';

const UiKit = () => (
  <Container fluid className="bg-secondary min-vh-100">
    <h1 className="text-center">Hello, Bootstrap 5 x React-Bootstrap!</h1>
    <hr />

    {/* Table of Contents */}
    <Row className="text-center">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Table of Contents
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Nav.Link href="#header">Headers</Nav.Link>
          <Nav.Link href="#test">Section 2</Nav.Link>
          <Nav.Link href="#section3">Section 3</Nav.Link>
          {/* Add more sections as needed */}
        </Dropdown.Menu>
      </Dropdown>
    </Row>
    <hr />
    {/* Headers */}
    <Row className="text-center section" id="headers">
      <Col>
        <h2>Headers</h2>
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
    {/* Buttons */}
    <Row>
      <Col>
        <Button variant="danger">Hello world</Button>
        <Button variant="info">Hello world</Button>
      </Col>
    </Row>
    {/* Cards */}
    <Row>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* Rows & Columns */}
    {/* NavBar & Navigation */}
    {/* Navs & Tabs */}
    {/* Univeral Inputs */}
    {/* Dropdowns */}
    {/* Modal */}
    {/* Images */}
    {/* Tables */}
    {/* Alerts */}
  </Container>
);

export default UiKit;
