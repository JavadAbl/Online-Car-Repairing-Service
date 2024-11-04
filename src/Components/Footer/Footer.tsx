import { Col, Container, Row, Stack } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className=" bg-dark">
      <Container fluid="lg">
        <Row xl={1} sm={1} md={2}>
          <Col>
            <Stack>
              <a className="link-info  " href="#">
                ContectUs
              </a>

              <a className="link-info  " href="#">
                AboutUs
              </a>

              <a className="link-info  " href="#">
                Our Branches
              </a>
            </Stack>
          </Col>
        </Row>

        <p>CopyRight Receved</p>
      </Container>
    </footer>
  );
}
