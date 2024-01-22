import { Row, Col, Form } from 'react-bootstrap';
import DatePicker from '@src/components/global/Inputs/DatePicker';
import SelectInput from '@src/components/global/Inputs/SelectInput';
import UniversalInput from '@src/components/global/Inputs/UniversalInput';
import { $formSignal } from '../UiKit.helpers';

const UniversalInputs = () => (
  <Row className="text-start" id="universal-inputs">
    <Col sm={{ span: 10, offset: 1 }}>
      <h2 className="text-decoration-underline text-center">Universal Inputs</h2>
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                    const $formSignal = Signal({
                      name: '',
                      number: 0,
                      password: '',
                      select: null,
                      date: new Date(),
                    });
                `}
            </code>
          </pre>

        </Col>
        <Col sm={6} className="my-auto">
          <p>You can use custom attributes for any one of these that happen in the inputs. Lets try to keep all form signal values at the root otherwise the signal won update properly without the custom attributes.</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                    <Form.Label>Name</Form.Label>
                    <UniversalInput
                      name="name"
                      placeholder="Name"
                      signal={$formSignal}
                    />
                `}
            </code>
          </pre>
        </Col>
        <Col sm={6} className="my-auto">
          <Form.Label>Name</Form.Label>
          <UniversalInput
            name="name"
            placeholder="Name"
            signal={$formSignal}
            className="mb-8"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                   <Form.Label>Number</Form.Label>
                   <UniversalInput
                     name="number"
                     type="number"
                     placeholder={0}
                     signal={$formSignal}
                     className="mb-8"
                   />
                `}
            </code>
          </pre>
        </Col>
        <Col sm={6} className="my-auto">
          <Form.Label>Number</Form.Label>
          <UniversalInput
            name="number"
            type="number"
            placeholder={0}
            signal={$formSignal}
            className="mb-8"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                    <Form.Label>Password</Form.Label>
                    <UniversalInput
                      name="password"
                      type="password"
                      placeholder="*******"
                      signal={$formSignal}
                      className="mb-8"
                    />
                `}
            </code>
          </pre>
        </Col>
        <Col sm={6} className="my-auto">
          <Form.Label>Password</Form.Label>
          <UniversalInput
            name="password"
            type="password"
            placeholder="*******"
            signal={$formSignal}
            className="mb-8"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                    <Form.Label>Select Input</Form.Label>
                    <SelectInput
                      name="select"
                      defaultValue="Select..."
                      signal={$formSignal}
                      className="mb-8"
                      options={[
                        {
                          label: 'Select...',
                          value: null,
                        },
                        {
                          label: 'Yes',
                          value: true,
                        },
                        {
                          label: 'No',
                          value: false,
                        },
                      ]}
                    />
                `}
            </code>
          </pre>
        </Col>
        <Col sm={6} className="my-auto">
          <Form.Label>Select Input</Form.Label>
          <SelectInput
            name="select"
            defaultValue="Select..."
            signal={$formSignal}
            className="mb-8"
            options={[
              {
                label: 'Select...',
                value: null,
              },
              {
                label: 'Yes',
                value: true,
              },
              {
                label: 'No',
                value: false,
              },
            ]}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <pre>
            <code>
              {`
                    <Form.Label>Date Input</Form.Label>
                    <DatePicker
                      name="date"
                      signal={$formSignal}
                      className="mb-8"
                    />
                `}
            </code>
          </pre>
        </Col>
        <Col sm={6} className="my-auto">
          <Form.Label>Date Input</Form.Label>
          <DatePicker
            name="date"
            signal={$formSignal}
            className="mb-8"
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default UniversalInputs;
