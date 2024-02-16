import Container from "react-bootstrap/Container";
import { Col, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import useSocialLinks from "../../../viewmodel/hooks/common/useSocialLinks";
import usePhones from "../../../viewmodel/hooks/common/usePhones";
import "./Footer.css";
import { useState } from "react";
import ApplicationPopUpForm from "../application/applicationPopUp/ApplicationPopUpForm";
import Button from "react-bootstrap/Button";
import FeedbackPopUp from "../feedback/FeedbackPopUp";

const Footer = () => {
  const { onClickTg, onClickVk } = useSocialLinks();
  const { techPhone, connectPhone } = usePhones();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleApplicationFormClose = () => setShowApplicationForm(false);
  const handleApplicationFormShow = () => setShowApplicationForm(true);

  const handleFeedbackClose = () => setShowFeedback(false);
  const handleFeedbackShow = () => setShowFeedback(true);

  return (
    <footer className="FooterWrapper">
      <div className="p-4">
        <Container>
          <Row className="pb-3">
            <h4 className="text-uppercase">simka</h4>
          </Row>
          <Row className="d-flex flex-row">
            <Col xs={3} md={2} xl={2}>
              <Col>{techPhone}</Col>
              <Col className="text-muted">Техническая поддержка</Col>
            </Col>
            <Col xs={3} md={3} xl={6}>
              <Col>{connectPhone}</Col>
              <Col className="text-muted">По вопросам подключения</Col>
            </Col>
            <Col
              xs={3}
              md={3}
              xl={2}
              className="ms-auto d-flex flex-column me-auto"
            >
              <Button variant="secondary" onClick={handleFeedbackShow}>
                Обратная связь
              </Button>
            </Col>
            <Col xs={3} md={4} xl={2} className="d-flex flex-column me-auto">
              <Button variant="secondary" onClick={handleApplicationFormShow}>
                Оформить заявку
              </Button>
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
            <ApplicationPopUpForm
              show={showApplicationForm}
              handleClose={handleApplicationFormClose}
            />
            <FeedbackPopUp
              show={showFeedback}
              handleClose={handleFeedbackClose}
            />
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
