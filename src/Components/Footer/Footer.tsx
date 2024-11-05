import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className=" bg-dark pt-4">
      <Container fluid="lg">
        <Row xs={1} sm={2} md={3} className=" row-gap-2 mb-2">
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

          <Col>
            <Stack>
              <a className="link-info fw-bold " href="#">
                Link1
              </a>

              <a className="link-info fw-bold " href="#">
                Link2
              </a>

              <a className="link-info fw-bold" href="#">
                Link3
              </a>
            </Stack>
          </Col>

          <Col>
            <p className="my-0 mb-2 text-light">Our Apps</p>
            <Stack direction="horizontal" gap={1}>
              <a href="#">
                <img
                  loading="lazy"
                  src="images/app-store-logo.png"
                  height={40}
                  width={125}
                  alt=""
                />
              </a>

              <a href="#">
                <img
                  loading="lazy"
                  src="images/google-play-logo.png"
                  width={125}
                  height={40}
                  alt=""
                />
              </a>
            </Stack>
          </Col>
        </Row>

        <p
          className={
            "text-center m-0 text-opacity-50 text-light " + styles.textRights
          }
        >
          All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}
