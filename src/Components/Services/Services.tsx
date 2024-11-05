import { Carousel, Container } from "react-bootstrap";
import TestSVG from "../SVGs/TestSVG";

export default function Services() {
  return (
    <>
      <TestSVG />
      <section className=" mb-8 py-4 bg-info-subtle text-center  shadow   ">
        <Container fluid="lg">
          <h2 className=" text-dark d-inline-block">Our Services</h2>
          <h6 style={{ fontSize: "small" }} className="text-muted">
            Make Your Choice
          </h6>
          {/* <i className="bi bi-wrench text-info display-6"></i> */}
          <hr />

          <Carousel touch fade interval={2000}>
            <Carousel.Item>
              <img
                loading="lazy"
                className=" w-100 rounded rounded-1"
                height={350}
                style={{ objectFit: "cover" }}
                src="s1.jpg"
                alt="First slide"
              />
              <Carousel.Caption className=" bg-black bg-opacity-50 text-light py-2 rounded rounded-2 ">
                <h3>Service 1</h3>
                <p>Description for the service.</p>{" "}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                loading="lazy"
                className=" w-100 rounded rounded-1"
                height={350}
                style={{ objectFit: "cover" }}
                src="s2.jpg"
                alt="First slide"
              />
              <Carousel.Caption className=" bg-black bg-opacity-50 text-light py-2 rounded rounded-2 ">
                <h3>Service 2</h3>
                <p>Description for the service.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                loading="lazy"
                className=" w-100 rounded rounded-1"
                height={350}
                style={{ objectFit: "cover" }}
                src="s3.jpg"
                alt="First slide"
              />
              <Carousel.Caption className=" bg-black bg-opacity-50 text-light py-2 rounded rounded-2 ">
                <h3>Service 3</h3>
                <p>Description for the service.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}
