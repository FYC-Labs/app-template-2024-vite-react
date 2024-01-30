import { useEffectAsync } from 'tools-fyc-react/utils';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loadable from '@src/components/global/Loadable';
import { $detail, $user } from 'tools-fyc-react/signals';
import { fetchAndSetSignal } from 'tools-fyc-react/signals/utils';
import users from '@src/api/users.api';

const Home = () => {
  useEffectAsync(async () => {
    await fetchAndSetSignal($detail, users.get());
    await fetchAndSetSignal($user, users.get());
  });

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Loadable signal={$detail}>
        <Row className="text-center">
          <Col sm={{ span: 8, offset: 2 }}>
            <div>
              <h1 className="mb-0">Welcome to FYC&apos;s</h1>
              <h1>{$detail.value?.title}</h1>
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
              <p>Happy coding!</p>
            </div>
            <hr />
            <Link to="/ui-kit" className="fs-5">Go to Ui Kit</Link>
          </Col>
        </Row>
      </Loadable>
    </Container>
  );
};

export default Home;
