import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CallBackLinks from "./CallBackLinks";
import "./CallBackInfoCard.css";

const CallBackInfoCard = () => {
  const onClickTg = () => {};
  const onClickVk = () => {};

  const phone = "8-000-000-0000";

  return (
    <Card className="p-4">
      <Card.Body>
        <Col xs="auto">
          <Card.Title as="h3">Остались вопросы? </Card.Title>
          <Card.Text>
            <span className="subtitleText">
              Оставьте заявку на консультацию и наш менеджер свяжется с вами в
              удобное для вас время
            </span>
          </Card.Text>
          <Button variant="secondary">Оставить заявку</Button>
          <Card.Text>
            <span className="text-muted">
              Или свяжитесь с нами удобным для вас способом
            </span>
            <CallBackLinks
              onClickTg={onClickTg}
              onClickVk={onClickVk}
              phone={phone}
            />
          </Card.Text>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default CallBackInfoCard;
