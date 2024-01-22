import { Row, Col, Button, Alert } from 'react-bootstrap';
import { $modalSignal } from '../UiKit.helpers';

const Alerts = () => (
  <Row className="text-center" id="alerts">
    <Col sm={{ span: 6, offset: 3 }}>
      <h2 className="text-decoration-underline">Alerts</h2>
      <Button onClick={() => $modalSignal.update({ id: 'alert' })} className="mb-8">Launch Alert Demo</Button>
      {$modalSignal.value.id === 'alert' && (
        <>
          <Alert variant="danger" onClose={() => $modalSignal.reset()} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Alert show={$modalSignal.value.id === 'alert'} variant="success">
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => $modalSignal.reset()} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
          <>
            {[
              'primary',
              'secondary',
              'success',
              'danger',
              'info',
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
