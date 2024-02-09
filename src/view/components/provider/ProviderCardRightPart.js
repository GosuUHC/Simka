import { Col, Row, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProviderCardRightPart = ({ description, phone }) => {
  return (
    <Col className="d-flex flex-column align-self-stretch pt-2">
      <Row className="mb-auto">
        <p className="text-muted text-break">{description}</p>
      </Row>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <Button variant="secondary" size="lg">
            Проверить покрытие
          </Button>
          <Stack>
            <h6>{phone}</h6>
            <Button variant="link" bsPrefix="info" as="a">
              Обратный звонок
            </Button>
          </Stack>
        </Stack>
      </Row>
    </Col>
  );
};

export default ProviderCardRightPart;
