import { Col, Row, Stack } from "react-bootstrap";
import styles from "./Card.module.css";

export default function Card({ title, content, image }) {
  return (
    <Stack
      direction="horizontal"
      style={{ backgroundColor: "red" }}
      className=" justify-content-center align-items-start"
    >
      <div>
        <i className="bi bi-airplane-fill text-primary-emphasis display-5"></i>
      </div>

      <div>
        <h2 className="h5">{title}</h2>
        <p>
          {content ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis officia tempore inventore sit."}
        </p>
      </div>
    </Stack>
  );
}
