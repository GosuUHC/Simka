import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";

const LowerPart = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav>
          <Nav.Link className={styles.noLeftPaddingBtn}>Провайдеры</Nav.Link>
          <Nav.Link>Рейтинг</Nav.Link>

          <Nav.Link>Тарифы</Nav.Link>
          <Nav.Link>Акции</Nav.Link>
        </Nav>
        <Nav.Item className={styles.noLeftPaddingBtn}>8-000-000-0000</Nav.Item>
      </Container>
    </Navbar>
  );
};

export default LowerPart;
