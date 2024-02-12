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
    <Navbar>
      <Container>
        <Nav>
          <Navbar.Brand
            className="text-uppercase"
            style={{ cursor: "pointer" }}
            onClick={onClickMain}
          >
            simka
          </Navbar.Brand>
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
