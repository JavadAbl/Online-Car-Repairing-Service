import { Col, Container, Row } from "react-bootstrap";
import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards() {
  return (
    <section className=" mb-8">
      <Container fluid="lg">
        <hr />
        <Row xs={2} sm={2} md={3} lg={4} className=" ">
          <Col>
            <Card
              title={"Best Services"}
              image={<i className="bi bi-hammer text-primary display-5"></i>}
            />
          </Col>
          <Col>
            <Card
              title={"Best Parts"}
              image={
                <i className="bi bi-car-front-fill text-primary display-5"></i>
              }
            />
          </Col>

          <Col>
            <Card
              title={"24Hours"}
              image={<i className="bi bi-watch text-primary display-5"></i>}
            />
          </Col>
          <Col>
            <Card
              title={"OnTime"}
              image={
                <i className="bi bi-airplane-fill text-primary display-5"></i>
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
