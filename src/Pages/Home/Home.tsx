import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container fluid={"lg"} className="  ">
        <NavBar />
        <Header />
        <Cards />
      </Container>
    </>
  );
}
