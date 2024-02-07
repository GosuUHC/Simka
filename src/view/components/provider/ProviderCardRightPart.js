import { Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProviderCardRightPart = ({ description, phone }) => {
  return (
    <Col xs>
      <Stack gap={3}>
        <p className="text-muted text-break">{description}</p>
        <Stack direction="horizontal" gap={2}>
          <Button variant="secondary">Проверить покрытие</Button>
          <Stack>
            <h6>{phone}</h6>
            <Button variant="link" bsPrefix="info" as="a">
              Обратный звонок
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Col>
  );
};

export default ProviderCardRightPart;
