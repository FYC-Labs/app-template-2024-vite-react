import { Row, Col, Button, Alert } from 'react-bootstrap';
import { $viewUiKit } from '../UiKit.helpers';

const Alerts = () => (
  <Row className="text-center mt-48" id="alerts">
    <Col sm={{ span: 6, offset: 3 }}>
      <h2 className="text-decoration-underline">Alerts</h2>
      <Button onClick={() => $viewUiKit.update({ activeModal: 'alert' })} className="mb-8">Launch Alert Demo</Button>
      {$viewUiKit.value.activeModal === 'alert' && (
        <>
          <Alert variant="danger" onClose={() => $viewUiKit.reset()} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Alert show={$viewUiKit.value.activeModal === 'alert'} variant="success">
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => $viewUiKit.reset()} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
          <>
            {[
              'primary',
              'secondary',
              'success',
              'info',
              'warning',
              'danger',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                This is a {variant} alert with{' '}
                <Alert.Link href="">an example link</Alert.Link>. Give it a click if
                you like.
              </Alert>
            ))}
          </>
        </>
      )}
    </Col>
  </Row>
);

export default Alerts;
