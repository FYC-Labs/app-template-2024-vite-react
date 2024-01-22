import { Row, Col, Button, Modal } from 'react-bootstrap';
import { $modalSignal } from '../UiKit.helpers';

const Modals = () => (
  <Row className="text-center" id="modal">
    <Col sm={{ span: 6, offset: 3 }}>
      <h2 className="text-decoration-underline">Modals</h2>
      <>
        <Button variant="info" onClick={() => $modalSignal.update({ id: 'modal' })}>
          Launch demo modal
        </Button>
        <Modal show={$modalSignal.value.id === 'modal'} onHide={() => $modalSignal.reset()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => $modalSignal.reset()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => $modalSignal.reset()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Col>
  </Row>
);

export default Modals;
