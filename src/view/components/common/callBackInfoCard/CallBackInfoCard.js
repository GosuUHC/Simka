import { Card, Col, Placeholder, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CallBackLinks from "./CallBackLinks";
import "./CallBackInfoCard.css";
import usePhones from "../../../../viewmodel/hooks/common/usePhones";

const CallBackInfoCard = () => {
  const onClickTg = () => {};
  const onClickVk = () => {};

  const { phone } = usePhones();

  return (
    <Card className="p-3 callBackInfoCardWrapper border-0" >
      <Card.Body>
        <Row>
          <Col>
            <Card.Title as="h3">Остались вопросы? </Card.Title>
            <Card.Text>
              <span className="subtitleText">
                Оставьте заявку на консультацию и наш менеджер свяжется с вами в
                удобное для вас время
              </span>
            </Card.Text>
            <Button variant="secondary" size="lg">
              Оставить заявку
            </Button>
            <Card.Text className="pt-4">
              <span className="text-muted">
                Или свяжитесь с нами удобным для вас способом
              </span>
            </Card.Text>
            <CallBackLinks
              onClickTg={onClickTg}
              onClickVk={onClickVk}
              phone={phone}
            />
          </Col>
          <Col>
            <Placeholder className="w-100 h-100" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CallBackInfoCard;
