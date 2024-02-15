import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Heart } from "react-bootstrap-icons";
import CitySelector from "./citySelector/CitySelector";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../consts";

const UpperPart = () => {
  const navigate = useNavigate();

  const onClickMain = () => navigate(PATH.main);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand
          className="text-uppercase"
          style={{ cursor: "pointer" }}
          onClick={onClickMain}
        >
          simka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <CitySelector />
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link>Поиск по адресу</Nav.Link>
            <Nav.Link>Обратный звонок</Nav.Link>
            <Nav.Link className="pe-0">
              <Heart />
              {` Избранное`}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UpperPart;
