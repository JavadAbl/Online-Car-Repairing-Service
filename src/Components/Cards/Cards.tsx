import { Col, Row } from "react-bootstrap";
import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards() {
  return (
    <section>
      <Row sm={2} md={3} lg={4} className=" ">
        <Col>
          <Card title={"Best Services"} />
        </Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
      </Row>
    </section>
  );
}
