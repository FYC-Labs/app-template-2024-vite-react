import DatePicker from '@src/components/global/Inputs/DatePicker';
import SelectInput from '@src/components/global/Inputs/SelectInput';
import UniversalInput from '@src/components/global/Inputs/UniversalInput';
import { Signal } from '@src/utils/Signal';
import { Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Nav,
  ButtonGroup,
  Navbar,
  Offcanvas,
  NavDropdown,
  Form,
  Modal,
  Image,
  Table,
  Alert,
  Badge,
  Stack,
  ProgressBar,
  Spinner,
} from 'react-bootstrap';
import fycLogo from '@src/assets/fycLogo.jpeg';

const $formSignal = Signal({
  name: '',
  number: 0,
  password: '',
  select: null,
  date: new Date(),
});

const $modalSignal = Signal({
  id: '',
});

const UiKit = () => (
  <Container fluid className="bg-secondary pb-24">
    <h1 className="text-center py-16 text-decoration-underline">Hello, Bootstrap 5 & React-Bootstrap!</h1>

    {/* Table of Contents */}
    <Row className="text-center">
      <a href="https://react-bootstrap.netlify.app/" className="mb-16">Go to React Bootstrap Docs</a>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Table of Contents
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Nav.Link href="#header" className="hover">Headers</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#buttons" className="hover">Buttons</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#cards" className="hover">Cards</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#row-col" className="hover">Rows & Columns</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#navbar" className="hover">NavBar</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#navs" className="hover">Navs & Tabs</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#universal-inputs" className="hover">Universal Inputs</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#dropdown" className="hover">Dropdowns</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#modal" className="hover">Modals</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#images" className="hover">Images</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#tables" className="hover">Tables</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#alerts" className="hover">Alerts</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#badges" className="hover">Badges</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#progress" className="hover">Progress Bar</Nav.Link>
          <Dropdown.Divider className="m-0" />
          <Nav.Link href="#loader" className="hover">Loader</Nav.Link>
        </Dropdown.Menu>
      </Dropdown>
    </Row>
    <hr />

    {/* Headers */}
    <Row className="text-center" id="headers">
      <Col>
        <h2 className="text-decoration-underline">Headers</h2>
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
    <hr />

    {/* Buttons */}
    <Row className="text-center" id="buttons">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Buttons</h2>
        <div className="d-flex justify-content-around">
          <Button variant="info" className="mb-8">Solid Button</Button>
          <Button variant="outline-info" className="mb-8">Outline Button</Button>
        </div>
        <Row className="mb-8">
          <Button size="lg" variant="danger">Large Button</Button>
        </Row>
        <Row className="mb-8">
          <Button variant="danger">Medium Button</Button>
        </Row>
        <Row className="mb-8">
          <Button size="sm" variant="danger">Small Button</Button>
        </Row>
        <Row>
          <ButtonGroup className="p-0">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Row>
      </Col>
    </Row>
    <hr />

    {/* Cards */}
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
    <hr />

    {/* Rows & Columns */}
    <Row className="text-center" id="row-col">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Rows & Columns</h2>
        <Row>
          <Col className="bg-info border border-2">1 of 3</Col>
          <Col xs={6} className="bg-info border border-2">2 of 3 (wider)</Col>
          <Col className="bg-info border border-2">3 of 3</Col>
        </Row>
        <Row>
          <Col className="bg-info border border-2">1 of 3</Col>
          <Col xs={5} className="bg-info border border-2">2 of 3 (wider)</Col>
          <Col className="bg-info border border-2">3 of 3</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="bg-info border border-2">
            1 of 3
          </Col>
          <Col md="auto" className="bg-info border border-2">Variable width content</Col>
          <Col xs lg="2" className="bg-info border border-2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col className="bg-info border border-2">1 of 3</Col>
          <Col md="auto" className="bg-info border border-2">Variable width content</Col>
          <Col xs lg="2" className="bg-info border border-2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col md={4} className="bg-info border border-2">md=4</Col>
          <Col md={{ span: 4, offset: 4 }} className="bg-info border border-2">{'md={{ span: 4, offset: 4 }}'}</Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }} className="bg-info border border-2">{'md={{ span: 3, offset: 3 }}'}</Col>
          <Col md={{ span: 3, offset: 3 }} className="bg-info border border-2">{'md={{ span: 3, offset: 3 }}'}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="bg-info border border-2">{'md={{ span: 6, offset: 3 }}'}</Col>
        </Row>
      </Col>
    </Row>
    <hr />

    {/* NavBar & Navigation */}
    <Row className="text-center" id="navbar">
      <Col sm={{ span: 6, offset: 3 }} className="p-0">
        <h2 className="text-decoration-underline">NavBar</h2>
        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Change expand to a sm or lg to see instead of false
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="">Home</Nav.Link>
                  <Nav.Link href="">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="">Action</NavDropdown.Item>
                  <NavDropdown.Item href="">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
    <hr />

    {/* Navs & Tabs */}
    <Row className="text-center" id="navs">
      <Col sm={{ span: 6, offset: 3 }} className="bg-body-tertiary">
        <h2 className="text-decoration-underline">Navs</h2>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
    <hr />

    {/* Univeral Inputs */}
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
    <hr />

    {/* Dropdowns */}
    <Row className="text-center" id="dropdown">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Dropdowns</h2>
        <Dropdown className="mb-8" data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mb-8">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">Menu Item</Dropdown.Item>
            <Dropdown.Item href="">Menu Item</Dropdown.Item>
            <Dropdown.Item href="">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <>
          <Dropdown className="mb-8" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Clickable Outside
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-8" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
              Clickable Inside
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mb-8" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Manual Close
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
              <Dropdown.Item href="">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      </Col>
    </Row>
    <hr />

    {/* Modal */}
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
    <hr />

    {/* Images */}
    <Row className="text-center" id="images">
      <Col sm={12}>
        <h2 className="text-decoration-underline">Images</h2>
        <Row>
          <Col xs={6} md={4}>
            <h6>
              rounded
            </h6>
            <Image src={fycLogo} rounded />
          </Col>
          <Col xs={6} md={4}>
            <h6>
              roundedCircle
            </h6>
            <Image src={fycLogo} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <h6>
              thumbnail
            </h6>
            <Image src={fycLogo} thumbnail />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <h6>
              Fluid Image
            </h6>
            <Image src={fycLogo} fluid />
          </Col>
        </Row>
      </Col>
    </Row>
    <hr />

    {/* Tables */}
    <Row className="text-center" id="tables">
      <Col sm={12}>
        <h2 className="text-decoration-underline">Tables</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lary</td>
              <td>Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <h6>Responsive table</h6>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <hr />

    {/* Alerts */}
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
    <hr />

    {/* Badges */}
    <Row className="text-center" id="badges">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Badges</h2>
        <Button variant="primary">
          Profile <Badge bg="danger">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <Stack direction="horizontal" className="mt-8" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">
            Warning
          </Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">
            Light
          </Badge>
          <Badge bg="dark">Dark</Badge>
        </Stack>
        <Stack direction="horizontal" className="mt-8" gap={2}>
          <Badge pill bg="primary">
            Primary
          </Badge>
          <Badge pill bg="secondary">
            Secondary
          </Badge>
          <Badge pill bg="success">
            Success
          </Badge>
          <Badge pill bg="danger">
            Danger
          </Badge>
          <Badge pill bg="warning" text="dark">
            Warning
          </Badge>
          <Badge pill bg="info">
            Info
          </Badge>
          <Badge pill bg="light" text="dark">
            Light
          </Badge>
          <Badge pill bg="dark">
            Dark
          </Badge>
        </Stack>
      </Col>
    </Row>
    <hr />

    {/* Progress Bars */}
    <Row className="text-center" id="progress">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Progress Bars</h2>
        <ProgressBar animated now={45} />
      </Col>
    </Row>
    <hr />

    {/* Loaders */}
    <Row className="text-center" id="loader">
      <Col sm={{ span: 6, offset: 3 }}>
        <h2 className="text-decoration-underline">Loaders</h2>
        <Row>
          <Col>
            <Spinner animation="border" />
            <Spinner animation="grow" />
          </Col>
        </Row>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </Col>
    </Row>

  </Container>
);

export default UiKit;
