import { Col, Row } from "react-bootstrap";
import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards() {
  return (
    <section>
      <Row xs={2} sm={2} md={3} lg={4} className=" ">
        <Col>
          <Card
            title={"Best Services"}
            image={
              <i className="bi bi-airplane-fill text-primary-emphasis display-5"></i>
            }
          />
        </Col>
        <Col>
          <Card
            title={"Best Services"}
            image={
              <i className="bi bi-airplane-fill text-primary-emphasis display-5"></i>
            }
          />
        </Col>
        <Col>
          <Card
            title={"Best Services"}
            image={
              <i className="bi bi-airplane-fill text-primary-emphasis display-5"></i>
            }
          />
        </Col>
        <Col>
          <Card
            title={"Best Services"}
            image={
              <i className="bi bi-airplane-fill text-primary-emphasis display-5"></i>
            }
          />
        </Col>
      </Row>
    </section>
  );
}
