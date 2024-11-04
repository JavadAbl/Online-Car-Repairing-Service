import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand={"sm"} variant="light" bg="primary-subtle">
      <Container fluid="lg" className="  ">
        <Navbar.Brand className="h4 py-0 my-0">
          {/* <span className="bi bi-car-front-fill me-1 "></span> */}
          <img src="logo3-color.webp" width="55" alt="" />
          <span>Online Car Services</span>
        </Navbar.Brand>

        <Navbar.Collapse className=" " id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link>Services</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>Services</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>Services</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Button type="button" variant={"outline-dark"} className=" ms-auto">
          Search
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" ms-2" />
      </Container>
    </Navbar>
  );
}
