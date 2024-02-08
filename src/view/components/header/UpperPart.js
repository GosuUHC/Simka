import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Heart } from "react-bootstrap-icons";
import CitySelector from "./citySelector/CitySelector";

const UpperPart = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav>
          <Navbar.Brand href="#home">SIMKA</Navbar.Brand>
          <CitySelector />
        </Nav>
        <Nav>
          <Nav.Link>Поиск по адресу</Nav.Link>
          <Nav.Link>Обратный звонок</Nav.Link>
          <Nav.Link className="pe-0">
            <Heart />
            {` Избранное`}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default UpperPart;
