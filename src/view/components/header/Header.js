import UpperPart from "./UpperPart";
import Navbar from "react-bootstrap/Navbar";
import LowerPart from "./LowerPart";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <UpperPart />
      <hr className={styles.divider} />
      <LowerPart />
    </>
  );
};

export default Header;
