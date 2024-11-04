import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import { Container } from "react-bootstrap";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/*  <Container fluid={"lg"} className="  "> */}
      <NavBar />
      <Header />
      <Cards />
      <Services />
      <Footer />
      {/*  </Container> */}
    </>
  );
}
