import { Stack } from "react-bootstrap";
import styles from "./Card.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card({ title, content, image }: any) {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      //  style={{ backgroundColor: "red" }}
      className={"justify-content-center align-items-start " + styles.container}
    >
      <div>{image}</div>

      <div>
        <h2 className="h5 text-info">{title}</h2>
        <p className=" text-muted ">
          {content ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis officia tempore inventore sit."}
        </p>
      </div>
    </Stack>
  );
}
