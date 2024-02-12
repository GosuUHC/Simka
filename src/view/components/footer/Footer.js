import Container from "react-bootstrap/Container";
import { Col, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import useSocialLinks from "../../../viewmodel/hooks/common/useSocialLinks";
import usePhones from "../../../viewmodel/hooks/common/usePhones";
import "./Footer.css";

const Footer = () => {
  const { onClickTg, onClickVk } = useSocialLinks();
  const { techPhone, connectPhone } = usePhones();

  return (
    <footer className="FooterWrapper">
      <div className="p-4">
        <Container>
          <Row className="pb-3">
            <h4 className="text-uppercase">simka</h4>
          </Row>
          <Row>
            <Col xs="auto">
              <Col>{techPhone}</Col>
              <Col className="text-muted">Техническая поддержка</Col>
            </Col>
            <Col xs="auto">
              <Col>{connectPhone}</Col>
              <Col className="text-muted">По вопросам подключения</Col>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col xs="auto">
              <span>&copy;2023 Симка.онлайн.ru</span>
            </Col>
            <Col xs="auto">
              <span>Политика конфиденциальности</span>
            </Col>
            <Col xs="auto">
              <span>Публичная оферта</span>
            </Col>
            <Col xs="auto">
              <span>Блог</span>
            </Col>

            <Col className="d-flex justify-content-end">
              <Stack direction="horizontal" gap={2}>
                <span className="text-muted">Мы онлайн с 8:00-20:00</span>
                <FontAwesomeIcon
                  size={"xl"}
                  icon={faTelegram}
                  onClick={onClickTg}
                />
                <FontAwesomeIcon size={"xl"} icon={faVk} onClick={onClickVk} />
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
