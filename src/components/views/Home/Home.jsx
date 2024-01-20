import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
    <Row className="text-center">
      <Col sm={{ span: 8, offset: 2 }}>
        <div>
          <h1 className="mb-0">Welcome to FYC&apos;s</h1>
          <h1>Vite X React Boiler Plate</h1>
          <hr />
          <p>
            Brace yourself for an epic journey through our collection of components, where coding is as
            smooth as Chuck Norris&apos;s roundhouse kick and more delightful than a surprise pizza delivery.
            🍕💻 - GPT
          </p>
          <p>
            Feel free to browse through the various components and customize them to fit your project&apos;s
            figma designs and needs. If you have any questions or need assistance, don&apos;t hesitate to reach out.
          </p>
          <p className="bold">Happy coding!</p>
        </div>
        <hr />
        <Link to="/ui-kit" className="fs-5">Go to Ui Kit</Link>
      </Col>
    </Row>
  </Container>
);

export default Home;
