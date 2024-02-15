import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../consts";

const LowerPart = () => {
  const navigate = useNavigate();

  const onClickProviders = () => navigate(PATH.providers);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              className={styles.noLeftPaddingBtn}
              onClick={onClickProviders}
            >
              Провайдеры
            </Nav.Link>
            <Nav.Link>Рейтинг</Nav.Link>

            <Nav.Link>Тарифы</Nav.Link>
            <Nav.Link>Акции</Nav.Link>
          </Nav>
          <Nav.Item className={styles.noLeftPaddingPhone}>
            8-000-000-0000
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LowerPart;
