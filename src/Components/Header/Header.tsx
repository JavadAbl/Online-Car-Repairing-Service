import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./Header.module.css";
import AnimatedWave from "../SVGs/AnimatedWave";

export default function Header() {
  return (
    <>
      <header className=" pt-6 pb-4 bg-info-subtle ">
        <Container fluid="lg">
          <Row lg={2} md={2} xs={1}>
            <Col>
              <img
                src="img-hero.jpg"
                alt=""
                className={
                  "img-thumbnail border border-2 rounded-2 " + styles.img
                }
              />
            </Col>
            <Col>
              <Stack gap={2}>
                <h1 className=" display-5 fw-bold ">
                  Welcome to Online Car Repairing Service
                </h1>

                <p className=" lead ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At et
                  assumenda quam dolor possimus vitae debitis eligendi nemo
                  explicabo, dolorem deleniti saepe. Architecto maxime nisi
                  fugit expedita. Quaerat, vel officiis!
                </p>

                <Stack
                  direction="horizontal"
                  gap={2}
                  className={
                    "justify-content-center align-items-center " +
                    styles.btnContainer
                  }
                >
                  <Button
                    size="lg"
                    variant="primary"
                    type="button"
                    className={"flex-fill text-dark " + styles.btn}
                  >
                    Order Now
                  </Button>

                  <Button
                    size="lg"
                    variant="outline-primary"
                    type="button"
                    className={"flex-fill text-dark " + styles.btn}
                  >
                    Contact
                  </Button>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      </header>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <AnimatedWave />
      </div>
    </>
  );
}
