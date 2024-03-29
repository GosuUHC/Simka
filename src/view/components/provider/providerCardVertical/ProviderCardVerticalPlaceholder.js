import { Card, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import usePhones from "../../../../viewmodel/hooks/common/usePhones";

const ProviderCardVerticalPlaceholder = () => {
  const { phone } = usePhones();

  return (
    <Col xs={12} sm={6} md={6} lg={3} className="py-1 d-flex">
      <Card className="border-0">
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h2" className="text-uppercase py-3">
            simka
          </Card.Title>

          <Card.Text className="h5 py-4">Поможем выбрать провайдера</Card.Text>
          <Card.Text>Это быстро, легко и, самое главное, бесплатно</Card.Text>
          <span className="mt-auto d-flex flex-column">
            <Stack gap={2}>
              <Button variant="secondary" className="align-self-stretch">
                Подобрать провайдера
              </Button>
              {phone}
              <span className="d-block">
                <Button variant="link" as="a" bsPrefix="info">
                  Свяжитесь с нами и менеджер ответит на все ваши вопросы
                </Button>
              </span>
            </Stack>
          </span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProviderCardVerticalPlaceholder;
