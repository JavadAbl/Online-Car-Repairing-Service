import { Carousel, Container } from "react-bootstrap";

export default function Services() {
  return (
    <section className=" mb-8 py-4 bg-info-subtle text-center  shadow border  ">
      <Container fluid="lg">
        <h2 className=" text-dark d-inline-block">Our Services</h2>
        <i className="bi bi-wrench text-info display-6"></i>
        <hr />

        <Carousel touch fade interval={2000}>
          <Carousel.Item>
            <img
              loading="lazy"
              className=" w-100 rounded rounded-1"
              height={500}
              style={{ objectFit: "cover" }}
              src="s1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className=" bg-black bg-opacity-50 text-light py-2 rounded rounded-2 ">
              <h3>First Slide Label</h3>
              <p>Description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}
